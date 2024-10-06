import React from 'react';

const Loader = () => {
    return (
        <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-56 w-full bg-gray-300"></div>
            <div className="skeleton h-4 w-28 bg-gray-300"></div>
            <div className="skeleton h-4 w-full bg-gray-300"></div>
            <div className="skeleton h-4 w-full bg-gray-300"></div>
        </div>
    );
};

export default Loader;