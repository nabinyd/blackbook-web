import { React } from "react";
import About from "./About.jsx";
import Purpose from "./Purpose.jsx";
import Vision from "./Vision.jsx";

function Homepage() {
    return (
        <div className=" bg-background-color text-white scroll-smooth ">
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-manrope font-semibold">Welcome to Blackbook - Your ultimate project showcase!!</h1>
                <h3>A collection of Innovative Projects by Aspiring Graduates</h3>
            </div>
            <About />
            <Purpose />
            <Vision />
        </div>

    );
}

export default Homepage