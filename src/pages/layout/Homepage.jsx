import { React } from "react";
import About from "./About.jsx";
import Purpose from "./Purpose.jsx";
import Vision from "./Vision.jsx";
import blackwhitelogo from '../../assets/images/black-white-paper.png'
import { Link } from "react-router-dom";


function Homepage() {
    return (
        <div className=" text-white scroll-smooth ">
            <div className="homepage h-screen flex flex-col items-center justify-center bg-cover relative bg-center" style={{ backgroundImage: `url(${blackwhitelogo})` }}>
                <div className="absolute inset-0 opacity-50"></div> {/* Overlay for better text readability */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl font-semibold">
                        Welcome to <span className="text-blue-300">Blackbook</span> -
                        <span className="underline decoration-solid underline-offset-4 decoration-1"> Your ultimate project showcase!!</span>
                    </h1>
                    <h3 className="mt-5 text-xl">A collection of Innovative Projects by Aspiring Graduates</h3>
                    <div className="mt-14">
                        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">Explore Projects</Link>
                    </div>
                </div>
            </div>
            <About />
            <Purpose />
            <Vision />
        </div>

    );
}

export default Homepage