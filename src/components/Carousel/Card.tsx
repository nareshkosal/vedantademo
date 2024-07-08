import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = () => {
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
      title: "Who We Are",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      title: "Our Security",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      title: "Our Process",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      title: "Our Destiny",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    // Add more items to test with a larger number of cards
    {
      title: "Our Vision",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      title: "Our Mission",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      title: "Our Values",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    },
    {
      title: "Our Goals",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. Nunc vitae velit arcu aliquam"
    }
  ];

  return (
    <div>
      <section className="bg-white py-16 text-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="px-2">
                <div className="relative w-48 h-48 overflow-hidden border transition duration-300 hover:shadow-xl group">
                  <div className="absolute inset-0 bg-[#0063A8] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
                    <div className="text-4xl text-blue-600 mb-4 group-hover:text-[#66CC33] transition-colors duration-300">
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#66CC33] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="group-hover:text-[#66CC33] transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Card;
