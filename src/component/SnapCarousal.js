import React, { useState } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const SnapCarousel = ({ title, children, showMoreLink }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const itemsPerPage = 5; // Number of items to display per step

  const totalSteps = Math.ceil(children.length / itemsPerPage);

  const handleStep = (step) => {
    const newStep = currentStep + step;
    if (newStep >= 0 && newStep < totalSteps) {
      setCurrentStep(newStep);
    }
  };

  const visibleChildren = children.slice(
    currentStep * itemsPerPage,
    (currentStep + 1) * itemsPerPage
  );

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between">
        {title && (
          <p className="text-lg font-semibold mb-2 font-bold">{title}</p>
        )}
        {showMoreLink && (
          <div className="mt-2 flex justify-end">
            <a
              href={showMoreLink}
              className="text-blue-500 hover:underline focus:outline-none flex items-center gap-2"
            >
              <span>Show More</span>
              <BsArrowRightCircle />
            </a>
          </div>
        )}
      </div>
      <div className="relative flex items-center overflow-hidden">
        <div className="flex gap-2 transition-transform duration-300 ease-in-out">
          {visibleChildren.map((child, index) => (
            <div
              key={index}
              className="min-w-[250px] transform transition-transform duration-300 ease-in-out"
            >
              {child}
            </div>
          ))}
        </div>
        {currentStep > 0 && (
          <button
            className="absolute left-0 top-0 bottom-0 flex items-center justify-center bg-gradient-to-l from-transparent to-gray-50 p-4"
            onClick={() => handleStep(-1)}
          >
            <BsArrowLeftCircle className="w-6 h-6" />
          </button>
        )}
        {currentStep < totalSteps - 1 && (
          <button
            className="absolute right-0 top-0 bottom-0 flex items-center justify-center bg-gradient-to-r from-transparent to-gray-50 p-4"
            onClick={() => handleStep(1)}
          >
            <BsArrowRightCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SnapCarousel;
