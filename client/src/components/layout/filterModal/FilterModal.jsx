import React, {useState} from 'react';
import flogo from "../../../assets/filtericon.svg";
import {PropertyListByFilterRequest} from "../../../apiRequest/PropertyApiRequest.js";
import axios from "axios";

const FilterModal = () => {
    const [privacyType, setPrivacyType] = useState({
        anyType: true,
        entireRoom: false,
        room: false
    });
    const [priceRange, setPriceRange] = useState([10, 250]);
    const [bedrooms, setBedrooms] = useState(0);
    const [beds, setBeds] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [amenities, setAmenities] = useState({
        wifi: false,
        kitchen: false,
        washer: false,
        dryer: false,
        airConditioning: false,
        heating: false,
    });

    const handlePriceChange = (event, index) => {
        const newRange = [...priceRange];
        newRange[index] = event.target.value;
        setPriceRange(newRange);
    };

    const togglePrivacyType = (pType) => {
        setPrivacyType({
            anyType: pType === 'anyType',
            entireRoom: pType === 'entireRoom',
            room: pType === 'room',
        });
    };
    const toggleAmenity = (amenity) => {
        setAmenities((prev) => ({
            ...prev,
            [amenity]: !prev[amenity],
        }));
    };

    const increment = (type) => {
        if (type === 'bedrooms') setBedrooms(bedrooms + 1);
        if (type === 'beds') setBeds(beds + 1);
        if (type === 'bathrooms') setBathrooms(bathrooms + 1);
    };

    const decrement = (type) => {
        if (type === 'bedrooms' && bedrooms > 0) setBedrooms(bedrooms - 1);
        if (type === 'beds' && beds > 0) setBeds(beds - 1);
        if (type === 'bathrooms' && bathrooms > 0) setBathrooms(bathrooms - 1);
    };

    // Function to make API call with selected filters
    const applyFilters = async () => {
        const selectedAmenities = Object.keys(amenities).filter(key => amenities[key]);
        const selectedPrivacyType = Object.keys(privacyType).filter(key => privacyType[key]);

        // Create the filters object dynamically
        const filters = {};
        if (selectedPrivacyType.length > 0) filters.privacyType = selectedPrivacyType;
        if (bedrooms > 0) filters.bedrooms = bedrooms;
        if (beds > 0) filters.beds = beds;
        if (bathrooms > 0) filters.bathrooms = bathrooms;
        if (priceRange[0] !== 10 || priceRange[1] !== 250) {
            filters.priceWithOutTax = {min: parseInt(priceRange[0]) , max:parseInt(priceRange[1]) };
        }
        if (selectedAmenities.length > 0) filters.amenities = selectedAmenities;

        console.log('Filters being sent:', filters); // Debugging line

        await PropertyListByFilterRequest(filters)
        document.getElementById('filterModal').close();
    };

    return (
        <>
            <button className="btn border-gray-500 px-4"
                    onClick={() => document.getElementById('filterModal').showModal()}>
                <img src={flogo} className="w-4" alt="Filter Icon"/> Filters
            </button>
            <dialog id="filterModal" className="modal">
                <div className="modal-box w-full max-w-lg flex flex-col justify-between h-screen">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="overflow-y-auto flex-grow">
                        <h3 className="font-bold text-xl mb-4">Filters</h3>
                        <div className="mb-6">
                            <h4 className="font-semibold text-lg">Type of place</h4>
                            <div className="flex justify-between mt-4">

                                {[
                                    {name: 'anyType'},
                                    {name: 'entireRoom'},
                                    {name: 'room'},
                                ].map((pType, idx) => (
                                    <button
                                        key={idx}
                                        className={`btn ${privacyType[pType.name] ? 'btn-active' : ''}`}
                                        onClick={() => togglePrivacyType(pType.name)}
                                    >
                                        {pType.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6">
                            <h4 className="font-semibold text-lg">Price range</h4>
                            <p className="text-sm text-gray-500">Nightly prices before fees and taxes</p>
                            <div className="relative mt-4">
                                <input type="range" min="10" max="250" value={priceRange[0]}
                                       onChange={(e) => handlePriceChange(e, 0)} className="w-full"/>
                                <input type="range" min="10" max="250" value={priceRange[1]}
                                       onChange={(e) => handlePriceChange(e, 1)} className="w-full -mt-2"/>
                                <div className="flex justify-between mt-2">
                                    <span>${priceRange[0]}</span>
                                    <span>${priceRange[1]}+</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h4 className="font-semibold text-lg">Rooms and beds</h4>
                            <div className="mt-4">
                                {['Bedrooms', 'Beds', 'Bathrooms'].map((room, idx) => (
                                    <div key={idx} className="flex justify-between items-center mb-4">
                                        <span>{room}</span>
                                        <div className="flex items-center">
                                            <button className="btn btn-outline"
                                                    onClick={() => decrement(room.toLowerCase())}>-
                                            </button>
                                            <span
                                                className="mx-4">{room === 'Bedrooms' ? bedrooms : room === 'Beds' ? beds : bathrooms}</span>
                                            <button className="btn btn-outline"
                                                    onClick={() => increment(room.toLowerCase())}>+
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6">
                            <h4 className="font-semibold text-lg">Amenities</h4>
                            <div className="flex flex-wrap mt-4">
                                {[
                                    {name: 'wifi', icon: '📶'},
                                    {name: 'kitchen', icon: '🍴'},
                                    {name: 'washer', icon: '🧺'},
                                    {name: 'Dryer', icon: '🌀'},
                                    {name: 'airConditioning', icon: '❄️'},
                                    {name: 'heating', icon: '🔥'}
                                ].map((amenity, idx) => (
                                    <button
                                        key={idx}
                                        className={`btn ${amenities[amenity.name] ? 'btn-active' : ''} m-1`}
                                        onClick={() => toggleAmenity(amenity.name)}
                                    >
                                        {amenity.icon} {amenity.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className="sticky bottom-0 bg-white py-4 flex justify-between items-center border-t border-gray-300">
                        <button className="btn btn-outline" onClick={() => {
                            setPrivacyType({

                                anyType: true,
                                entireRoom: false,
                                room: false

                            });
                            setPriceRange([10, 250]);
                            setBedrooms(0);
                            setBeds(0);
                            setBathrooms(0);
                            setAmenities({
                                wifi: false,
                                kitchen: false,
                                washer: false,
                                dryer: false,
                                airConditioning: false,
                                heating: false
                            });
                        }}>Clear all
                        </button>
                        <button className="btn btn-primary" onClick={applyFilters}>Show Results</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};
export default FilterModal;
