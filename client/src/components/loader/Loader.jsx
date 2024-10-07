import React from 'react';

const Loader = () => {
    return (
        <>
            {
                Array.from({length:6}).map((item, index) =>
                    <div className="w-full" key={index}>
                            <div className="skeleton h-56 w-full bg-gray-300 mb-3"></div>
                            <div className="skeleton h-4 w-28 bg-gray-300 mb-3"></div>
                            <div className="skeleton h-4 w-full bg-gray-300 mb-3"></div>
                            <div className="skeleton h-4 w-full bg-gray-300 mb-3"></div>
                    </div>
                )
            }


        </>
    );
};

export default Loader;