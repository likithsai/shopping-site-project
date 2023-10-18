import React from "react";
import ImgCarousal from "./ImgCarousal";
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
    return (
        <div>
            <div className="w-full transform overflow-hidden rounded-lg bg-white border">
                <ImgCarousal images={props.images} />
                <div className="p-4 flex flex-col gap-2">
                    <NavLink to={`/product/${props.id}`}>
                        <h2 className="text-lg font-bold text-gray-900">{ props.title }</h2>
                    </NavLink>
                    <p className="text-base text-gray-700 line-clamp-2">{ props.desc }</p>
                    <div className="border-b" />
                    <div className="flex items-center mb-2">
                        <p className="mr-2 text-xl font-semibold text-gray-900 font-bold">{ props.newprice }</p>
                        <p className="text-xs font-medium text-gray-500 line-through">{ props.oldprice }</p>                      
                        <p className="ml-auto text-base font-medium text-green-500">{ Math.round(props.newprice/props.oldprice*100)}% off</p>
                    </div>
                    <button onClick={props.onClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-full">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;