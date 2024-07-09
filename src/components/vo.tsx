import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from "@/components/ui/button";

import { GiChemicalDrop } from 'react-icons/gi';
import { BsFillFuelPumpFill } from "react-icons/bs";
import TitleSection from "./Titlesection";


 // Replace with actual icons you need

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const sliderRef = useRef<any>(null);
  const images = [
    'https://images.pexels.com/photos/3361235/pexels-photo-3361235.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];
  const videos = [
    'https://videos.pexels.com/video-files/5099274/5099274-sd_640_360_30fps.mp4'
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 2800,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const features = [
    {
      icon: GiChemicalDrop,
      title: "Who We Are",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      icon: BsFillFuelPumpFill,
      title: "Our Security",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      icon: BsFillFuelPumpFill,
      title: "Our Process",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      icon: BsFillFuelPumpFill,
      title: "Our Destiny",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      icon: BsFillFuelPumpFill,
      title: "Our Vision",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      icon: BsFillFuelPumpFill,
      title: "Our Mission",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      icon: BsFillFuelPumpFill,
      title: "Our Values",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      icon: BsFillFuelPumpFill,
      title: "Our Goals",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    }
  ];
  

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const [selectedTitle, setSelectedTitle] = useState<number>(0);

  const titles = [
    { title: 'Title 1', images: ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg'] },
    { title: 'Title 2', images: ['/image5.jpg', '/image6.jpg', '/image7.jpg', '/image8.jpg'] },
    { title: 'Title 3', images: ['/image9.jpg', '/image10.jpg', '/image11.jpg', '/image12.jpg'] },
    { title: 'Title 4', images: ['/image13.jpg', '/image14.jpg', '/image15.jpg', '/image16.jpg'] },
    { title: 'Title 5', images: ['/image17.jpg', '/image18.jpg', '/image19.jpg', '/image20.jpg'] },
    { title: 'Title 6', images: ['/image21.jpg', '/image22.jpg', '/image23.jpg', '/image24.jpg'] },
    { title: 'Title 7', images: ['/image25.jpg', '/image26.jpg', '/image27.jpg', '/image28.jpg'] },
  ];
  const selectedImages = titles[selectedTitle].images;

  return (
    <>
    <div className="min-h-screen bg-white">
      <main className="px-4 py-16 text-center md:px-8 lg:px-16">
        <div className="md:flex">
          <div className="text-left">
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-[#f97316]">Industrio Company</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Manufacturing industry became a key sector of production and labour in European and North American countries during the Industrial Revolution, upsetting previous mercantile and feudal economies.
            </p>
            <div className="mt-4 space-y-2 text-left md:space-y-0 md:space-x-8 md:flex md:justify-start">
              <div>
                <p className="text-[#f97316]">→ Our Work Growth</p>
                <p className="text-[#f97316]">→ 1500 Employed</p>
              </div>
              <div>
                <p className="text-[#f97316]">→ Our Employee Growth</p>
                <p className="text-[#f97316]">→ Service Management</p>
              </div>
            </div>
            <Button className="mt-8 bg-[#f97316] text-white">Learn about the services</Button>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="relative w-72 h-72">
              <Image
                src={images[0]}
                alt={images[0]}
                width={288}
                height={288}
                className="rounded-full w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-36 h-36">
                <video
                  src={videos[0]}
                  className="rounded-full w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 relative">
          <section className="bg-white py-16 text-black">
            <div className="container mx-auto px-4 max-w-7xl">
              <Slider ref={sliderRef} {...settings}>
              {features.map((feature, index) => (
  <div key={index} className="px-2">
    <div className="relative w-48 h-48 overflow-hidden border border-black rounded-xl transition duration-300 hover:shadow-xl group">
      <div className="absolute inset-0 bg-[#0063A8] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
        {/* Default content */}
        <div className="default-content group-hover:hidden">
          <div className="text-4xl text-orange-600 mb-4 transition-colors duration-300 flex justify-center">
            {React.createElement(feature.icon, { className: "h-10 w-10 flex justify-center" })}
          </div>
          <h3 className="text-xl font-bold mb-4 transition-colors duration-300">
            {feature.title}
          </h3>
        </div>
        {/* Hover content */}
        <div className="hover-content hidden group-hover:flex flex-col justify-center items-center">
          <div className="text-4xl text-[#66CC33] mb-4 transition-colors duration-300">
            {React.createElement(feature.icon, { className: "h-10 w-10 flex justify-center text-[#66CC33]" })}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[#66CC33] transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  </div>
))}


              </Slider>
            </div>
          </section>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between -4">
            <Button onClick={prevSlide} className="bg-gray-200 text-gray-800 hover:bg-gray-300">&lt;</Button>
            <Button onClick={nextSlide} className="bg-gray-200 text-gray-800 mr-9 hover:bg-gray-300">&gt;</Button>
          </div>
        </div>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="rounded-lg max-w-2xl w-full">
            <div className="flex justify-end items-center mb-2 mr-2">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  if (videoRef.current) {
                    (videoRef.current as HTMLVideoElement).pause(); // Use type assertion to specify the type
                  }
                }}
                className="text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.707-9.707a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414L11.414 12l1.293 1.293a1 1 0 01-1.414 1.414L10 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 12 7.293 10.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className=" rounded-b-lg">
              <video
                ref={videoRef}
                className="w-full"
                autoPlay
                controls
              >
                <source src={videos[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
    <div>
      <h1 className="text-4xl text-center">Projects for <span className="text-orange-500">inspirations</span></h1>
      <div className="flex justify-center w-full my-5">
      <h1 className="text-xl text-center w-2/4">You will find yourself working in a true partnership that results in an incredible
      experience, and an end product that is the best.</h1>
      </div>

      <br/>
      <br/>
      <div >
        <div className="flex justify-center"><div className="flex gap-10">
      {titles.map((section, index) => (
        <TitleSection
          key={index}
          title={section.title}
          isSelected={selectedTitle === index}
          onClick={() => setSelectedTitle(index)}
        />
      ))}</div></div>
        
      <div className="images">
        {selectedImages.map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <style jsx>{`
        .images {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .images img {
          width: 100px;
          height: 100px;
        }
      `}</style>
    </div>
    </div>
    </>
  );
}
