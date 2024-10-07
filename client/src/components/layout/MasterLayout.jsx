import React from 'react';
import Header from "./Header.jsx";
import Listings from "../listings/Listings.jsx";
const MasterLayout = () => {
    return (
        <div className="parent-container">
            <Header/>
            <div className="content-section grid grid-cols-1 gap-6 pl-10 pr-10 sm:grid-cols-2  lg:grid-cols-4 2xl:grid-cols-6">
                <Listings/>
            </div>
        </div>
    );
};
export default MasterLayout;