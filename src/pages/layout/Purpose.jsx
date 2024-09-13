import React from "react";

function Purpose() {
    return (
        <div className=' mx-auto'>
            <h1 className=' sm:text-5xl font-bold mt-12 text-3xl text-center p-4'> Purpose</h1>
            <div class="sm:p-16  sm:border  sm:border-white/30 sm:mt-16 rounded-lg mx-auto sm:w-3/5  sm:shadow-md sm:shadow-gray-600 sm:drop-shadow-md">
                <ul class="list-disc list-outside  space-y-6 sm:text-2xl text-lg sm:text-justify font-sans leading-relaxed  text-gray-300 mx-8  ">
                    <li className="" >
                        Platform for students to showcase their projects.
                    </li>
                    <li>
                        We aim to inspire, motivate, and elevate the standards of project-based learning.
                    </li>
                    <li>
                        Bridge the gap between academia and industry .
                    </li>
                    <li>
                        Connect with potential employers.
                    </li>
                    <li>
                        Mostly for students who are looking for internships and job opportunities.
                    </li>

                    <li>
                        Plays a vital role in the bringing the IDEA during <span className="text-blue-400"> HACKTHON, PROJECT EXPO HACKTHON, PROJECT EXPO</span>, etc to the real world.
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Purpose