import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import BlackbookLogo from "../../assets/logo/svgexport-62.svg";
import { useLocation } from "react-router-dom";
import { UserserviceContext } from "../../context/UserServiceContext";





export default function Navbar() {
    const navigate = useNavigate();
    const { isUserLoggedIn, handleLogout, userData, validateToken } = useContext(UserserviceContext);

    const token = localStorage.getItem("token");
    console.log(token);







    console.log(isUserLoggedIn);

    // useEffect(() => {
    //     console.log(isUserLoggedIn);
    //     if (isUserLoggedIn) {
    //         navigate('/profile');
    //     }
    // }, [isUserLoggedIn])

    return (
        <header className="shadow sticky z-50 top-0 scrollbar-hide">
            <nav className="bg-background-color border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img className="w-full p-2 h-14"
                            src={BlackbookLogo}
                            alt="Logo"

                        />
                    </Link>
                    {isUserLoggedIn ? (
                        <div className="flex items-center lg:order-2">
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    ` hover:bg-gray-800 rounded-lg text-sm p-1.5 mr-2 ${isActive ? "border border-blue-700" : ""}`}

                            >
                                <h3>{userData.fullname}</h3>
                                <p className="text-xs">{userData.email}</p>
                            </NavLink>
                            <Link
                                to="/login"
                                onClick={handleLogout}
                                className="hover:bg-blue-500  font-medium rounded-lg text-sm px-4  bg-blue-400 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log out
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center lg:order-2">
                            <Link
                                to="/login"
                                className="hover:bg-jet rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                className=" bg-blue-400 hover:bg-blue-500  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                                Get started
                            </Link>
                        </div>
                    )}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 text-lg lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to={"/home"}

                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${isActive ? "text-blue-500" : "text-gray-200"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}
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
                                <NavLink to={""}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${isActive ? "text-blue-500" : "text-white"}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to={"/profile"}
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Profile
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="w-full h-[0.1px] bg-gray-800"></div>
        </header>
    );
}



// export default Navbar;