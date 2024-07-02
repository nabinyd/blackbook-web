import React from "react";
import PurposeLogo from '../assets/icons/prpose.png'

function Purpose() {
    return (
        <div className=" bg-background-color text-white h-screen-75">
            <div className="mx-auto w-9/12 flex items-center justify-center">
                <div className="w-full">
                    <h1 className="text-3xl font-semibold mb-4">Purpose</h1>
                    <p className="text-justify pr-20">Our mission is to bridge the gap between academia and industry by providing a platform where students can display their hard work, gain recognition, and connect with potential employers. We aim to inspire, motivate, and elevate the standards of project-based learning.</p>
                </div>
                <div className="w-1/3">
                    <img src={PurposeLogo} alt="" />
                </div>
            </div>

        </div>

    );
}

export default Purpose