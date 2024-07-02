import React from 'react'
import VisionLogo from '../assets/icons/vision.png';

export default function Vision() {
    return (
        <div className=" bg-background-color text-white h-screen-75">
            <div className="mx-auto w-9/12 flex items-center justify-center">
                <div className="w-full">
                    <h1 className="text-3xl font-semibold mb-4">Vision</h1>
                    <p className="text-justify pr-20 mb-2">We envision Blackbook as the go-to platform for discovering the next big innovations and talents. Our goal is to create a thriving community of learners, educators, and professionals collaborating and sharing knowledge.</p>
                    <p className='text-justify pr-20'>Our mission is to provide a space where projects can be shared, discoverd, and appreciated by a global audience. We believe that every project, big or small, holds immerse value and potential to inspire others. By bringing together projects From various fields, including electronics, communication, information engineering, and beyond, we aim to foster a community of learners and innovators who can learn from each other and collaborate on future endeavors.</p>
                </div>
                <div className="w-1/3">
                    <img src={VisionLogo} alt="" />
                </div>
            </div>

        </div>
    )
}
