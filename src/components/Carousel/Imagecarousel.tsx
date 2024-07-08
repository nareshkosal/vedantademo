import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const images = [
  'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2480806/pexels-photo-2480806.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2480806/pexels-photo-2480806.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2480806/pexels-photo-2480806.jpeg?auto=compress&cs=tinysrgb&w=800',
];

interface CustomArrowProps {
  direction: 'next' | 'prev';
  onClick: () => void;
}

const CustomArrow: React.FC<CustomArrowProps> = ({ direction, onClick }) => {
  return (
    <div
      className={`absolute top-1/2 ${direction === 'next' ? 'right-4' : 'left-4'} transform -translate-y-1/2 z-10 cursor-pointer`}
      onClick={onClick}
    >
      <div className="group bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all duration-300">
        <div className="flex items-center">
          {direction === 'prev' && (
            <span className="text-white max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 pl-2">
              Slide Previous
            </span>
          )}
          <div className={`text-white text-3xl p-2 ${direction === 'next' ? 'order-2' : 'order-1'}`}>
            {direction === 'next' ? <FaChevronRight /> : <FaChevronLeft />}
          </div>
          {direction === 'next' && (
            <span className="text-white max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 pr-2">
              Slide Next
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ImageCarousel: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (3 seconds)
  };

  const getPositionClass = (index: number) => {
    switch (index % 3) {
      case 0:
        return 'items-start text-left'; // Left
      case 1:
        return 'items-center text-center'; // Center
      case 2:
        return 'items-end text-right'; // Right
      default:
        return 'items-start text-left';
    }
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative h-[40rem]">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
            <div className={`absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center ${getPositionClass(index)}`}>
              <div className="px-4">
                <h1 className="text-4xl text-white font-bold">
                  We will provide the best <br /> <span className="text-orange-500">Industrial</span> service
                </h1>
                <p className="text-lg text-white">
                  We are the best guaranteed company to serve you.<br /> We are dedicated to help you any time.
                </p>
                  <button className="bg-red-500 hover:bg-gray-400 text-white px-4 py-2 flex items-center space-x-2">
                    <span>Learn More</span>
                    <FaArrowRight />
                  </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <CustomArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
      <CustomArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
    </div>
  );
};

export default ImageCarousel;
