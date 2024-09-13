import React from "react";
import { Link } from "react-router-dom";

export default function ShareProject() {
    return (
        <div className="h-72 bg-neutral-900 flex flex-col items-center justify-center text-center bg-cover bg-center w-full mx-auto p-5">
            <h1 className="sm:text-3xl font-semibold text-lg">
                Do you want to share your project with the world? <br />
            </h1>
            <p className="text-gray-300 text-sm pt-4">Share your project with us and let the world know about your innovation</p>
            <Link to="/createproject" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded mt-6 ">Create Project</Link>
        </div>
    );
}