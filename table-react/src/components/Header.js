import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav id="header" className="w-full z-30 bg-gray-400 shadow-lg mt-3">
            <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="20"
                         height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle"/>

                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                    <nav>
                        <div className="md:flex items-center justify-between text-base  pt-4 md:pt-0">
                            <NavLink to="/"
                                     className="inline-block no-underline text-2xl text-white font-medium text-lg py-2 px-4 lg:-ml-2"
                                     href="#"> NevisCRM </NavLink>
                            <NavLink to="/"
                                     className="inline-block no-underline font-medium text-lg py-2 px-4 lg:-ml-2"
                                     href="#">Dashboard </NavLink>
                            <NavLink to="/students"
                                     className="inline-block no-underline font-medium text-lg py-2 px-4 lg:-ml-2"
                                     href="#">Студенты </NavLink>
                        </div>
                    </nav>
                </div>

                <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
                     id="nav-content">
                    <div className="auth flex items-center w-full md:w-full">
                        <a
                            className="inline-block no-underline font-medium text-lg py-2 px-4 lg:-ml-2"
                            href="#">Mikhail</a>
                        <button
                            className="text-white  p-2 rounded border-white border-2 hover:text-gray-100">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;