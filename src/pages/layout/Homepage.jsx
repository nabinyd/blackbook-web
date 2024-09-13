import React, { useContext } from "react";
import About from "./About.jsx";
import Purpose from "./Purpose.jsx";
import blackwhitelogo from '../../assets/images/black-white-paper.png'
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import { UserserviceContext } from "../../context/UserServiceContext.jsx";
import Loader from "../../utils/Loader.jsx";
import ShareProject from "./ShareProject.jsx";
import GetApp from "./GetApp.jsx";




function Homepage() {

    const { isUserLoggedIn, userData, fetchUserData, loading, validateToken, validatingToken, loadingGoogle } = useContext(UserserviceContext);

    console.log(isUserLoggedIn);
    console.log(validatingToken);

    if (validatingToken || loading || loadingGoogle) {
        return <Loader />
    }

    return (
        <div className=" scroll-smooth ">
            <div className="homepage h-screen-90  flex flex-col sm:items-center justify-center bg-cover  bg-center" style={{ backgroundImage: `url(${blackwhitelogo})` }}>
                <div className=" inset-0 opacity-50"></div> {/* Overlay for better text readability */}
                <div className="relative z-10 text-center ">
                    <h1 className="sm:text-4xl font-semibold text-3xl">
                        Welcome to <span className="text-blue-300">Blackbook</span> -
                        <span className="underline decoration-solid underline-offset-4  decoration-1 decoration-blue-400"> Your ultimate project showcase</span>
                    </h1>
                    <h3 className="mt-5 sm:text-xl ">
                        A collection of Innovative Projects by Aspiring Graduates
                    </h3>
                    <div className="mt-10">
                        <div className="p-3 mb-4 sm:text-3xl font-raleway font-bold ">
                            <h1 className="text-orange-500">
                                Explore 500+ Projects
                            </h1>
                        </div>
                        <Link to="/projects" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded">Explore Projects</Link>
                    </div>

                </div>
            </div>
            <ShareProject />
            <About />
            <Purpose />
            <GetApp />
            <Footer />
        </div>

    );
}

export default Homepage