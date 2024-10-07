import React from 'react';
import Header from "./Header.jsx";
import Listings from "../listings/Listings.jsx";
import {useSelector} from "react-redux";
const MasterLayout = () => {
    const PropertyList = useSelector((state) => state.property.PropertyList);
    const loader = useSelector((state) => state.loaderAnimation.loader);
    return (
        <div className="parent-container">
            <Header/>
            <div
                className={`content-section grid gap-6 pl-10 pr-10 sm:grid-cols-2 
                lg:grid-cols-4 2xl:grid-cols-6 
                ${loader===false && PropertyList.length===0 && "sm:grid-cols-1 lg:grid-cols-1 " +
                "2xl:grid-cols-1"}`}>
                <Listings/>
            </div>
        </div>
    );
};
export default MasterLayout;