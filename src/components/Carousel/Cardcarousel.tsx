import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Card } from '../ui/card';
import { FlaskRoundIcon, FuelIcon, PowerIcon, SunIcon, ShieldIcon } from 'lucide-react';

const Cardcarousel: React.FC = () => {
  const images = [
    "https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2569844/pexels-photo-2569844.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const cardInfo = [
    {
      title: "Fuel & Gas Management",
      icon: <FuelIcon className="w-6 h-6 text-orange-500" />,
      hoverText: "Discover more about Fuel & Gas Management",
    },
    {
      title: "Chemical Research",
      icon: <FlaskRoundIcon className="w-6 h-6 text-orange-500" />,
      hoverText: "Explore Chemical Research",
    },
    {
      title: "Power & Energy Sector",
      icon: <PowerIcon className="w-6 h-6 text-orange-500" />,
      hoverText: "Learn about the Power & Energy Sector",
    },
    {
      title: "Renewable Energy",
      icon: <SunIcon className="w-6 h-6 text-yellow-500" />,
      hoverText: "Discover Renewable Energy Solutions",
    },
    {
      title: "Security Systems",
      icon: <ShieldIcon className="w-6 h-6 text-blue-500" />,
      hoverText: "Explore Security Systems",
    }
  ];

  return (
    <section className="p-8">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className="relative overflow-hidden">
              <div className="w-full h-56 relative">
                <Image
                  src={imageUrl}
                  alt="Card Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity">
                <div className={`absolute inset-x-0 bottom-0 bg-black text-white bg-opacity-75 p-4 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="flex items-center justify-center">
                    {cardInfo[index].icon}
                    <h3 className="ml-2 text-lg font-bold">
                      {cardInfo[index].title}
                    </h3>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-black bg-opacity-75 transform ${hoveredIndex === index ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
                  <div className="absolute inset-x-0 text-white text-center p-4">
                    <p className="text-lg font-bold">
                      {cardInfo[index].hoverText}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Cardcarousel;
