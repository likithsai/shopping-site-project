import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from "react-icons/bs";

const SnapCarousel = ({ title, children }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className='flex items-center justify-between'>
        {title && <p className="text-lg font-semibold mb-2 font-bold">{title}</p>}
        <div className='flex items-center gap-2'>
          <NavLink to="#" className="text-blue-500 hover:underline focus:outline-none flex items-center gap-2">
            <span>Show More</span>
            <BsArrowRightCircle />
          </NavLink>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-2 overflow-x-auto">
          {
            children.map((child, index) => (
              <div key={index} className="snap-center min-w-[250px]">
                {child}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SnapCarousel;
