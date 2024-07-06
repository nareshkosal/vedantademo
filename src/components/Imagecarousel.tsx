import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800',
  // add more image paths here
];

const SampleNextArrow = (props: React.HTMLAttributes<HTMLDivElement> & { onClick?: () => void }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 right-2 transform -translate-y-1/2 z-10 hidden group-hover:block bg-black p-2 rounded-full cursor-pointer`}
      onClick={onClick}
      style={{ ...style }}
    />
  );
};

const SamplePrevArrow = (props: React.HTMLAttributes<HTMLDivElement> & { onClick?: () => void }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 left-2 transform -translate-y-1/2 z-10 hidden group-hover:block bg-black p-2 rounded-full cursor-pointer`}
      onClick={onClick}
      style={{ ...style }}
    />
  );
};

const ImageCarousel = () => {
  const sliderRef = useRef<Slider>(null);
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative">
            <Image src={src} alt={`Image ${index + 1}`} layout="responsive" width={800} height={600} />
          </div>
        ))}
      </Slider>

      {/* Position next and prev arrows */}
      <div className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${isHovered ? 'block' : 'hidden'}`}>
        <SamplePrevArrow onClick={goToPrev} />
      </div>
      <div className={`absolute top-1/2 right-2 transform -translate-y-1/2 z-10 ${isHovered ? 'block' : 'hidden'}`}>
        <SampleNextArrow onClick={goToNext} />
      </div>
    </div>
  );
};

export default ImageCarousel;
