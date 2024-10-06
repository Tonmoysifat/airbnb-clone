import React, {useState} from 'react';
import {PropertyListByFilterRequest} from "../../apiRequest/PropertyApiRequest.js";

const AddGuestsModal = () => {
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [totalGuest, setTotalGuest] = useState(0);

    const increment = (type) => {
        if (type === 'adult') {
            setAdult(adult + 1)
            setTotalGuest(totalGuest + 1)
        }
        ;
        if (type === 'children') {
            setChildren(children + 1);
            setTotalGuest(totalGuest + 1)
        }
        if (type === 'infants') {
            setInfants(infants + 1)
            setTotalGuest(totalGuest + 1)
        }
        ;
    };

    const decrement = (type) => {
        if (type === 'adult' && adult > 0) {
            setAdult(adult - 1)
            setTotalGuest(totalGuest - 1)
        }
        ;
        if (type === 'children' && children > 0) {
            setChildren(children - 1)
            setTotalGuest(totalGuest - 1)
        }
        ;
        if (type === 'infants' && infants > 0) {
            setInfants(infants - 1)
            setTotalGuest(totalGuest - 1)
        }
        ;
    };
    const applyFilters = async () => {

        // Create the filters object dynamically
        const filters = {};
        if (adult > 0 || children > 0 || infants > 0) {
            filters.guests = parseInt(totalGuest)
        }
        await PropertyListByFilterRequest(filters)
        document.getElementById('my_modal_4').close();
    };

    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-full max-w-lg flex flex-col justify-between h-screen">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="overflow-y-auto flex-grow pt-5">

                        <div className="mb-6">
                            <div className="mt-4">
                                {['Adult', 'Children', 'Infants'].map((room, idx) => (
                                    <div key={idx} className="mb-4">
                                        <div className={"flex justify-between items-center mb-5"}>
                                            <span className="font-bold">{room}</span>
                                            <div className="flex items-center">
                                                <button className="btn btn-outline"
                                                        onClick={() => decrement(room.toLowerCase())}>-
                                                </button>
                                                <span
                                                    className="mx-4">{room === 'Adult' ? adult : room === 'Children' ? children : infants}</span>
                                                <button className="btn btn-outline"
                                                        onClick={() => increment(room.toLowerCase())}>+
                                                </button>
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className="sticky bottom-0 bg-white py-4 flex justify-between items-center border-t border-gray-300">
                        <button className="btn btn-primary" onClick={applyFilters}>Show Results</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default AddGuestsModal;