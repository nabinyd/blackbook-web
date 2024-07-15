import React from "react";
import PurposeLogo from '../../assets/icons/prpose.png'

function Purpose() {
    return (
        <div className=" text-white h-screen-75 mt-9">
            <div className="mx-auto w-9/12 flex items-center justify-center">
                <div className="w-full ">
                    <h1 className="text-4xl font-semibold mb-4">Purpose</h1>
                    <p className="text-justify pr-20 text-lg">Our mission is to bridge the gap between academia and industry by providing a platform where students can display their hard work, gain recognition, and connect with potential employers. We aim to inspire, motivate, and elevate the standards of project-based learning.</p>
                </div>
                <div className="w-1/3">
                    <img src={PurposeLogo} alt="purposelogo" className="w-64 h-64" />
                </div>
            </div>

        </div>

    );
}

export default Purpose