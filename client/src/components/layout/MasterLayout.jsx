import React, {useEffect} from 'react';
import Header from "./Header.jsx";
import Listings from "../listings/Listings.jsx";
import {CategoryListRequest} from "../../apiRequest/CategoryApiRequest.js";
import {useSelector} from "react-redux";
import {PropertyListByCategoryRequest} from "../../apiRequest/PropertyApiRequest.js";
const MasterLayout = () => {
    const CategoryValue = useSelector((state) => state.category.categoryValue);
    const FilterToggle = useSelector((state) => state.category.filterToggle);
    useEffect(() => {
        (async () => {
            await CategoryListRequest();
        })();
    }, []);

    useEffect(() => {
        (async () => {
            await PropertyListByCategoryRequest(CategoryValue);
        })();
    }, [CategoryValue]);
    const CategoryList = useSelector((state) => state.category.categoryList);
    const PropertyList = useSelector((state) => state.property.PropertyList);

    return (
        <div className="parent-container">
            <Header CategoryList={CategoryList}/>
            <div className="content-section grid grid-cols-1 gap-6 pl-10 pr-10 sm:grid-cols-2  lg:grid-cols-4 2xl:grid-cols-6">
                <Listings FilterToggle={FilterToggle} CategoryValue={CategoryValue} PropertyList={PropertyList} />
            </div>
        </div>
    );
};

export default MasterLayout;