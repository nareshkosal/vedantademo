import React from 'react';
import Slider from 'react-slick';
import { Card } from '../ui/card';
import { FlaskRoundIcon, FuelIcon, PowerIcon, SunIcon, ShieldIcon } from 'lucide-react';
import Image from 'next/image';

const Cardcarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="p-8">
        <Slider {...settings}>
          <Card className="relative">
            <Image 
              src="/placeholder.svg" 
              alt="Fuel & Gas Management" 
              className="w-full h-48 object-cover" 
              layout="fill" 
              objectFit="cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 p-4 text-white">
              <FuelIcon className="w-6 h-6 text-orange-500" />
              <h3 className="mt-2 text-lg font-bold">Fuel & Gas Management</h3>
            </div>
          </Card>
          <Card className="relative">
            <Image 
              src="/placeholder.svg" 
              alt="Chemical Research" 
              className="w-full h-48 object-cover" 
              layout="fill" 
              objectFit="cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 p-4 text-white">
              <FlaskRoundIcon className="w-6 h-6 text-orange-500" />
              <h3 className="mt-2 text-lg font-bold">Chemical Research</h3>
            </div>
          </Card>
          <Card className="relative">
            <Image 
              src="/placeholder.svg" 
              alt="Power & Energy Sector" 
              className="w-full h-48 object-cover" 
              layout="fill" 
              objectFit="cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 p-4 text-white">
              <PowerIcon className="w-6 h-6 text-orange-500" />
              <h3 className="mt-2 text-lg font-bold">Power & Energy Sector</h3>
            </div>
          </Card>
          <Card className="relative">
            <Image 
              src="/placeholder.svg" 
              alt="Renewable Energy" 
              className="w-full h-48 object-cover" 
              layout="fill" 
              objectFit="cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 p-4 text-white">
              <SunIcon className="w-6 h-6 text-yellow-500" />
              <h3 className="mt-2 text-lg font-bold">Renewable Energy</h3>
            </div>
          </Card>
          <Card className="relative">
            <Image 
              src="/placeholder.svg" 
              alt="Security Systems" 
              className="w-full h-48 object-cover" 
              layout="fill" 
              objectFit="cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 p-4 text-white">
              <ShieldIcon className="w-6 h-6 text-blue-500" />
              <h3 className="mt-2 text-lg font-bold">Security Systems</h3>
            </div>
          </Card>
        </Slider>
      </section>
     
    </>
  );
};

export default Cardcarousel;
