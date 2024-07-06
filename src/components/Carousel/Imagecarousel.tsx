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
];

interface CustomArrowProps {
  direction: 'next' | 'prev';
  onClick: () => void;
}

const CustomArrow: React.FC<CustomArrowProps> = ({ direction, onClick }) => {
  return (
    <div
      className={`absolute top-1/2 ${direction === 'next' ? 'right-4' : 'left-4'} transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer`}
      onClick={onClick}
    >
      {direction === 'next' ? (
        <FaChevronRight className="text-white" />
      ) : (
        <FaChevronLeft className="text-white" />
      )}
    </div>
  );
};

const ImageCarousel: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (3 seconds)
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative h-[40rem]"> {/* Set a fixed height */}
            <Image 
              src={src} 
              alt={`Image ${index + 1}`} 
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start">
              <h2 className="text-white text-3xl mb-4">We provide the best industrial services</h2>
              <p className="text-white text-lg mb-4">We are the best guarenteed compny to serve you. We are dedicated to help you anytime.</p>
              <button className="bg-red-500 onhover:bg-gray-400 text-white px-4 py-2 flex items-center space-x-2">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </Slider>
      
      {isHovered && (
        <>
          <CustomArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
          <CustomArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
