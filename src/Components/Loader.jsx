import React from 'react';

const Loader = () => {
    return (
        <div className='w-full min-h-screen bg-[rgb(0,0,38)] flex justify-center items-center'>
            <div className="p-10">
                <span className="loading loading-infinity text-warning loading-lg"></span>
            </div>
        </div>
    );
};

export default Loader;