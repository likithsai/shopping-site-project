import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { BsList, BsCartDash, BsPersonCircle, BsGrid1X2, BsShop, BsPerson } from "react-icons/bs";

const Header = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <header>
            <nav className="bg-white border-gray-200 px-1.5 lg:px-6 py-2.5 border-b sticky top-0 w-full">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center gap-1">
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <span className="sr-only">Open main menu</span>
                            <BsList className="w-6 h-6" />
                        </button>
                        <NavLink to="/">
                            <span className="self-center text-xl font-semibold whitespace-nowrap font-bold">{ props.title }</span>
                        </NavLink>
                    </div>
                    <div className="flex items-center lg:order-2 gap-1">
                        <NavLink exact to={"/cart"} className="aria-[current=page]:text-blue-700" onClick={() => setMobileMenuOpen(false)}>
                            <div className="flex items-center gap-1 py-2 px-2">
                                <button className="inline-flex items-center ml-1 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                    <BsCartDash className="w-6 h-6" />
                                </button>
                                <span>{ props.cart.length }</span>
                            </div>
                        </NavLink>
                        <NavLink to="/login" className="hidden md:inline-flex items-center p-2 ml-1 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <BsPersonCircle className="w-6 h-6" />
                        </NavLink>
                    </div>
                    <div className={`${
                        mobileMenuOpen ? 'block' : 'hidden'
                        } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition`} id="mobile-menu-2">
                        <ul className="flex flex-col my-3 lg:my-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                className="flex items-center py-2 pr-4 pl-3 text-gray-700 border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 aria-[current=page]:font-bold aria-[current=page]:text-blue-700"
                                to="/home"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    <BsGrid1X2 className="w-4 h-4 mr-2" />
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                className="flex items-center py-2 pr-4 pl-3 text-gray-700 border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 aria-[current=page]:font-bold aria-[current=page]:text-blue-700"
                                to="/shop"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    <BsShop className="w-4 h-4 mr-2" />
                                    <span>Shop</span>
                                </NavLink>
                            </li>
                            <li className="md:hidden">
                                <NavLink
                                className="flex items-center py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 aria-[current=page]:font-bold aria-[current=page]:text-blue-700"
                                to="/login"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    <BsPerson className="w-4 h-4 mr-2" />
                                    <span>Login</span>
                                </NavLink>
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