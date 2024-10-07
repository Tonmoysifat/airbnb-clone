import React from 'react';
import noDataImg from "../../assets/no-results.png"
const NoData = () => {
    return (
        <div className="container">
            <div className="">
                <div className="flex md:-mt-[53px] flex-col items-center">
                    <img alt="nodataImg" className="md:w-3/12 " src={noDataImg}/>
                    <h4 className="font-bold text-lg relative bottom-9">At this moment data is only added to the Icons and Amazing Views Tabs</h4>
                </div>
            </div>
        </div>
    );
};

export default NoData;