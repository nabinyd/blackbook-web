import React from 'react';
import '../css/Loader.css';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="wave-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default Loader;
