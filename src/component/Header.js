import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/fontawesome-free-solid'
import { faUser } from '@fortawesome/fontawesome-free-regular'
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

const Header = (props) => {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 border-b">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink
                    className="flex items-center gap-1"
                    activestyle={{ color: 'red' }}
                    to={"/"}
                    >
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <FontAwesomeIcon className="w-6 h-6" icon={faBars} />
                        </button>
                        <span className="self-center text-xl font-semibold whitespace-nowrap font-bold">{ props.title }</span>
                    </NavLink>
                    <div className="flex items-center lg:order-2 gap-1">
                        <NavLink exact to={"/cart"} className="aria-[current=page]:text-orange-700">
                            {/* <div class="relative inline-flex w-fit">
                                <div
                                    class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                                    { props.cart.length }
                                </div>
                                <div class="flex items-center justify-center text-center">
                                    <FontAwesomeIcon className="w-6 h-6" icon={faCartPlus} />
                                </div>
                            </div> */}
                            <div className="flex items-center gap-1 py-2 px-4">
                                <button className="inline-flex items-center ml-1 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                    <FontAwesomeIcon className="w-6 h-6" icon={faCartPlus} />
                                </button>
                                <span>{ props.cart.length }</span>
                            </div>
                        </NavLink>
                        <button className="hidden lg:inline-flex items-center p-2 ml-1 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <FontAwesomeIcon className="w-5 h-5" icon={faUser} />
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 aria-[current=page]:font-bold aria-[current=page]:text-orange-700"
                                to="/home"
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 aria-[current=page]:font-bold aria-[current=page]:text-orange-700"
                                to="/shop"
                                >Shop</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function mapStateToProps(state) {
  return {
    title: state.items.title,
    cart: state.cart
  }
}

export default connect(
  mapStateToProps
)(Header)