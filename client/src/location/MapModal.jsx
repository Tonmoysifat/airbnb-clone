import React from 'react';
import Map from "./Map.jsx";
import {useSelector} from "react-redux";
import {PropertyListByFilterRequest} from "../apiRequest/PropertyApiRequest.js";

const MapModal = () => {
    const mapValue = useSelector((state) => state.category.mapValue)
    const sendMapValue = async () => {
        const filters = {
            "location": {
                "coordinates": [mapValue.lon, mapValue.lat]
            }
        };
        await PropertyListByFilterRequest(filters)
        console.log(mapValue)
        document.getElementById('my_modal_2').close();
    }
    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box w-full max-w-lg flex flex-col justify-between h-screen">
                <Map/>
                <div
                    className=" bottom-0 bg-white py-4  items-center border-t border-gray-300">
                    <button className="btn btn-primary" onClick={sendMapValue}>Show Results</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default MapModal;