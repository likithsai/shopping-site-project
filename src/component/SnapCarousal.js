import React from 'react';

const SnapCarousel = ({ title, children }) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      {title && <p className="text-lg font-semibold mb-2 font-bold">{title}</p>}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-2 overflow-x-auto">
          {children.map((child, index) => (
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
