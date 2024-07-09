// import React, { useRef, useState } from 'react';
// import Slider from 'react-slick';
// import Image from 'next/image';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

// const images = [
//   'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800',
//   'https://images.pexels.com/photos/2480806/pexels-photo-2480806.jpeg?auto=compress&cs=tinysrgb&w=800',
//   'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800',
//   'https://images.pexels.com/photos/2480806/pexels-photo-2480806.jpeg?auto=compress&cs=tinysrgb&w=800',
//   'https://images.pexels.com/photos/2480806/pexels-photo-2480806.jpeg?auto=compress&cs=tinysrgb&w=800',
// ];

// interface CustomArrowProps {
//   direction: 'next' | 'prev';
//   onClick: () => void;
// }

// const CustomArrow: React.FC<CustomArrowProps> = ({ direction, onClick }) => {
//   return (
//     <div
//       className={`absolute top-1/2 ${direction === 'next' ? 'right-4' : 'left-4'} transform -translate-y-1/2 z-10 cursor-pointer`}
//       onClick={onClick}
//     >
//       <div className="group bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all duration-300">
//         <div className="flex items-center">
//           {direction === 'prev' && (
//             <span className="text-white max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 pl-2">
//               Slide Previous
//             </span>
//           )}
//           <div className={`text-white text-3xl p-2 ${direction === 'next' ? 'order-2' : 'order-1'}`}>
//             {direction === 'next' ? <FaChevronRight /> : <FaChevronLeft />}
//           </div>
//           {direction === 'next' && (
//             <span className="text-white max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 pr-2">
//               Slide Next
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ImageCarousel: React.FC = () => {
//   const sliderRef = useRef<Slider | null>(null);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false, // Hide default arrows
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 3000, // Set autoplay speed (3 seconds)
//   };

//   const getPositionClass = (index: number) => {
//     switch (index % 3) {
//       case 0:
//         return 'items-start text-left'; // Left
//       case 1:
//         return 'items-center text-center'; // Center
//       case 2:
//         return 'items-end text-right'; // Right
//       default:
//         return 'items-start text-left';
//     }
//   };

//   return (
//     <div className="relative">
//       <Slider ref={sliderRef} {...settings}>
//         {images.map((src, index) => (
//           <div key={index} className="relative h-[40rem]">
//             <Image
//               src={src}
//               alt={`Image ${index + 1}`}
//               layout="fill"
//               objectFit="cover"
//               className="w-full"
//             />
//             <div className={`absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center ${getPositionClass(index)}`}>
//               <div className="px-4">
//                 <h1 className="text-4xl text-white font-bold">
//                   We will provide the best <br /> <span className="text-orange-500">Industrial</span> service
//                 </h1>
//                 <p className="text-lg text-white">
//                   We are the best guaranteed company to serve you.<br /> We are dedicated to help you any time.
//                 </p>
//                   <button className="bg-red-500 hover:bg-gray-400 text-white px-4 py-2 flex items-center space-x-2">
//                     <span>Learn More</span>
//                     <FaArrowRight />
//                   </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       <CustomArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
//       <CustomArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
//     </div>
//   );
// };

// export default ImageCarousel;

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export function ImagesSliderDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2480806/pexels-photo-2480806.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const getPositionClass = (index: number) => {
    switch (index % 3) {
      case 0:
        return 'items-start text-left';
      case 1:
        return 'items-center text-center';
      case 2:
        return 'items-end text-right';
      default:
        return 'items-start text-left';
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[40rem] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <motion.div 
            className={`absolute inset-0 flex flex-col justify-center ${getPositionClass(currentIndex)}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="px-20">
              <h1 className="text-4xl text-white font-bold">
                We will provide the best <br /> <span className="text-orange-500">Industrial</span> service
              </h1>
              <p className="text-lg text-white mt-2">
                We are the best guaranteed company to serve you.<br /> We are dedicated to help you any time.
              </p>
              <motion.button 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-4 flex items-center space-x-2 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-30"
        onClick={handlePrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowLeft className="text-black" />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-30"
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowRight className="text-black" />
      </motion.button>
    </div>
  );
}