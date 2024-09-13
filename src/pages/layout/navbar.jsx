import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import BlackbookLogo from "../../assets/logo/svgexport-62.svg";
import { UserserviceContext } from "../../context/UserServiceContext";





export default function Navbar() {
    const { isUserLoggedIn, handleLogout, userData } = useContext(UserserviceContext);
    const { fullName, userName } = userData;

    return (
        <header className="shadow sticky z-50 top-0 scrollbar-hide">
            <nav className="bg-background-color border-gray-200 px-4 py-2.5">
                <div className="sm:flex  justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex justify-center">
                        <img className="w-full p-2 h-14"
                            src={BlackbookLogo}
                            alt="Logo"
                        />
                    </Link>
                    {isUserLoggedIn ? (
                        <div className="sm:flex items-center lg:order-2 hidden ">
                            <NavLink
                                to="/profile"
                                className={({ isActive }) => `fhover:bg-blue-500  font-medium rounded-lg text-sm px-2  lg:px-5 py-1 mr-2 focus:outline-none ${isActive ? "border border-blue-600" : "text-gray-200 border border-neutral-700"}`}
                            >
                                <p className="text-sm">{fullName}</p>
                                <p className="text-sm">{userName}</p>
                            </NavLink>
                            <NavLink
                                to="/login"
                                onClick={handleLogout}
                                className="hover:bg-blue-500  font-medium rounded-lg text-sm px-4  bg-blue-400 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log out
                            </NavLink>
                        </div>
                    ) : (
                        <div className="sm:flex items-center lg:order-2 hidden">
                            <NavLink
                                to="/login"
                                className="hover:bg-jet rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className=" bg-blue-600 hover:bg-blue-500  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                                Sign up
                            </NavLink>
                        </div>
                    )}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto "

                    >
                        <ul className="flex flex-col mt-4 text-[18px] lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to={"/"}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${isActive ? "text-blue-500" : "text-gray-200"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/projects"}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-gray-100  lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${isActive ? "text-blue-500" : "text-white"}`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/finalyearprojects"}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${isActive ? "text-blue-500" : "text-white"}`
                                    }>
                                    FinalYearProject
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${isActive ? "text-blue-500" : "text-white"}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${isActive ? "text-blue-500" : "text-white"}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to={"/profile"}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${isActive ? "text-blue-500" : "text-white"}`
                                    }
                                >
                                    Profile
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav >
            <div className="w-full h-[0.1px] bg-gray-800"></div>
        </header >
    );
}



// export default Navbar;