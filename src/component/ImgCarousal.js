import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  //   handle scroll for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }

    touchStartX.current = null;
  };


  return (
    <div className="flex flex-col items-center w-full">
        <div
            className="relative w-full h-48 overflow-hidden"
            role="region"
            aria-label="Image Carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            {
                images.map((image, index) => (
                    <div
                        key={index}
                        className={ `w-full h-full absolute transform ${ index === activeIndex ? '' : 'hidden' } ease-in-out` }
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            role="img"
                            aria-label={image.alt}
                        />
                    </div>
                ))
            }
            <div className='hidden md:block'>
                <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black p-2 rounded-full hover:bg-gray-400 transition duration-200"
                aria-label="Previous Slide">
                    <FaChevronLeft />
                </button>
                <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2  text-black p-2 rounded-full hover:bg-gray-400 transition duration-200"
                aria-label="Next Slide">
                    <FaChevronRight />
                </button>
            </div>
            {/* indicator */}
            <div className="absolute bottom-4 flex mt-2 w-full items-center justify-center">
                {
                    images.map((_, index) => (
                        <div
                            key={index}
                            className={
                                `w-1.5 h-1.5 mx-0.5 rounded-full ${ index === activeIndex ? 'bg-blue-500' : 'bg-gray-400' }`
                            }
                        />
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default Carousel;
