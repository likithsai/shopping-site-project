import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";

const SnapCarousel = ({ title, children, maxVisibleItems }) => {
  const visibleChildren = children.slice(0, maxVisibleItems);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className='flex items-center justify-between'>
      {
        title && <p className="text-lg font-semibold mb-2 font-bold">{title}</p>
      }
      {
        children.length > maxVisibleItems && (
          <div className='flex items-center gap-2'>
            <button className="text-blue-500 hover:underline focus:outline-none">Show More</button>
            <BsArrowRightCircle />
          </div>
        )
      }
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-2 overflow-x-auto">
          {visibleChildren.map((child, index) => (
            <div key={index} className="snap-center min-w-[250px]">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SnapCarousel;
