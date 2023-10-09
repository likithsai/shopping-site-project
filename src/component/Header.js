import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faTag } from '@fortawesome/fontawesome-free-solid'
import { faUser } from '@fortawesome/fontawesome-free-regular'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 border-b">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <b className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faTag} />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
                    </b>
                    <div className="flex items-center lg:order-2 gap-1">
                        <button className="inline-flex items-center p-2 ml-1 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <FontAwesomeIcon className="w-6 h-6" icon={faCartPlus} />
                        </button>
                        <button className="hidden lg:inline-flex items-center p-2 ml-1 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <FontAwesomeIcon className="w-5 h-5" icon={faUser} />
                        </button>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <FontAwesomeIcon className="w-6 h-6" icon={faBars} />
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                                activeStyle={{ color: 'red' }}
                                to={"/home"}
                                >Home</NavLink>
                                {/* <a href="/home" className="block py-2 pr-4 pl-3 text-gray-700 border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Home</a> */}
                            </li>
                            <li>
                                <NavLink
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                                activeStyle={{ color: 'red' }}
                                to={"/shop"}
                                >Shop</NavLink>
                                {/* <a href="/shop" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Shop</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;