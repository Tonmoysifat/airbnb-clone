import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {PropertyListByFilterRequest} from "../../apiRequest/PropertyApiRequest.js";
const CalendarModal = () => {
    const [dates, setDates] = useState([new Date(), new Date()]); // Store both start and end dates
    const handleDateChange = (newDates) => {
        setDates(newDates);
    }
    const sendDates = async () => {
        const startDate = dates[0];
        const endDate = dates[1];
        await PropertyListByFilterRequest({startDate, endDate})
        document.getElementById('my_modal_3').close();
    };
    return (
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-full max-w-lg flex flex-col gap-0 justify-between h-screen">
                    <Calendar className="w-full border-0 pt-5"
                        onChange={handleDateChange}
                        value={dates}
                        selectRange={true}
                    />
                    <div className="bottom-0 bg-white py-4 items-center border-t border-gray-300">
                        <button className="btn btn-primary" onClick={sendDates}>Show Results</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
    );
};
export default CalendarModal;
