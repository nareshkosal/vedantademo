import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import ourStory from "../../../src/assets/4-power-plant-aspect-ratio-400-409.jpg";
import companyHistory from "../../../src/assets/transforming-for-good-slider_img3.jpg";
import { GoShieldCheck } from "react-icons/go";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import Link from "next/link";
import Header from "@/components/Header/Header";

const About = () => {
  const [selectedYear, setSelectedYear] = useState(2010);
  const [activeSection, setActiveSection] = useState(0);

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % 2);
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + 2) % 2);
  };

  const sectors = [
    [
      { title: "Power & Energy Sector", icon: "/icons/power.svg" },
      { title: "Petroleum Refinery", icon: "/icons/petroleum.svg" },
      { title: "Mechanical Engineering", icon: "/icons/mechanical.svg" },
    ],
    [
      { title: "Civil Engineering", icon: "/icons/civil.svg" },
      { title: "Chemical Processing", icon: "/icons/chemical.svg" },
      { title: "Industrial Automation", icon: "/icons/automation.svg" },
    ],
  ];
  const years = [1970, 1980, 1990, 2000, 2010];
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  const reviews = [
    {
      title: "Best Consulting Firm",
      content:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidu laboreetde magnam aliquam quaerat voluptatem.",
      author: "Alexa Reid",
      role: "Synopsis",
      avatar: "/images/alexa-reid.jpg",
    },
    {
      title: "Nice People",
      content:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidu laboreetde magnam aliquam quaerat voluptatem.",
      author: "Alva Goldhammer",
      role: "Synopsis",
      avatar: "/images/alva-goldhammer.jpg",
    },
    // Add more reviews as needed
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
        <div className="bg-white">
          {/* Inner Banner */}
          <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-4xl font-bold mb-4">About Us</h3>
              <ul className="flex justify-center">
                <li>
                  <Link href="/" className="text-[#0063A8]">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2">&gt;</span>
                </li>
                <li>
                  <span>About Us</span>
                </li>
              </ul>
            </div>
          </div>

          {/* About Style Three */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="relative">
                    <Image
                      src={ourStory}
                      alt="About Us"
                      width={600}
                      // height={300}
                      className="h-[500px]"
                    />
                    <div className="absolute  top-6 left-0 bg-[#0063A8] h-64 w-64 text-white p-12">
                      <span className="block text-md mt-2">Our Story</span>
                      <h3 className="text-4xl font-bold">Something About</h3>
                      <h3 className="text-4xl font-bold">Us</h3>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <div className="pl-0 md:pl-8">
                    <h3 className="text-4xl font-bold mb-4 text-black">
                      We are leading international consulting firm specializing
                      in financial investment.
                    </h3>
                    <p className="mb-12 text-black">
                      Totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia conse quuntur.
                    </p>
                    <a
                      href="#"
                      className="bg-[#0063A8] text-white px-6 py-3 hover:bg-[#66CC33] transition duration-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Style Two */}
          <section className="bg-white py-16 text-black">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature Item 1 */}
                <div className="relative w-96 h-80 overflow-hidden border transition duration-300 hover:shadow-xl group">
                  <div className="absolute inset-0 bg-[#0063A8] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
                    <div className="text-4xl text-blue-600 mb-4 group-hover:text-[#66CC33] transition-colors duration-300">
                      <RiLightbulbFlashLine />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#66CC33] transition-colors duration-300">
                      Who We Are
                    </h3>
                    <p className="group-hover:text-[#66CC33] transition-colors duration-300">
                      Aenean lacinia feugiat massa, sit amet con sequat lacus
                      suscipit vitae. Nunc vitae velit arcu aliquam
                    </p>
                  </div>
                </div>

                {/* Feature Item 2 */}
                <div className="relative w-96 h-80 overflow-hidden border transition duration-300 hover:shadow-xl group">
                  <div className="absolute inset-0 bg-[#0063A8] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
                    <div className="text-4xl text-blue-600 mb-4 group-hover:text-[#66CC33] transition-colors duration-300">
                      <GoShieldCheck />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#66CC33] transition-colors duration-300">
                      Our Security
                    </h3>
                    <p className="group-hover:text-[#66CC33] transition-colors duration-300">
                      Aenean lacinia feugiat massa, sit amet con sequat lacus
                      suscipit vitae. Nunc vitae velit arcu aliquam
                    </p>
                  </div>
                </div>

                {/* Feature Item 3 */}
                <div className="relative w-96 h-80 overflow-hidden border transition duration-300 hover:shadow-xl group">
                  <div className="absolute inset-0 bg-[#0063A8] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
                    <div className="text-4xl text-blue-600 mb-4 group-hover:text-[#66CC33] transition-colors duration-300">
                      <BsPersonWorkspace />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#66CC33] transition-colors duration-300">
                      Our Process
                    </h3>
                    <p className="group-hover:text-[#66CC33] transition-colors duration-300">
                      Aenean lacinia feugiat massa, sit amet con sequat lacus
                      suscipit vitae. Nunc vitae velit arcu aliquam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Company History */}
          <section className="py-16 bg-gray-100 text-black">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-4xl font-bold mb-4">
                    Company <span className="text-[#0063A8]">history</span> at a
                    glance
                  </h2>
                </div>
                <div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <div className="relative pt-8">
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200"></div>
                  <div className="flex justify-between items-end relative">
                    {years.map((year, index) => (
                      <div
                        key={year}
                        className={`flex flex-col items-center ${
                          index === 0
                            ? "ml-[-8px]"
                            : index === years.length - 1
                            ? "mr-[-8px]"
                            : ""
                        }`}
                      >
                        <span
                          className={`text-sm mb-4 ${
                            selectedYear === year
                              ? "text-[#0063A8] font-bold"
                              : "text-gray-500"
                          } transition-colors duration-200`}
                        >
                          {year}
                        </span>
                        <button
                          onClick={() => setSelectedYear(year)}
                          className={`w-2 h-2 rounded-full ${
                            selectedYear === year
                              ? "bg-[#0063A8]"
                              : "bg-gray-400"
                          } mb-[-2px] transition-colors duration-200 z-10`}
                        ></button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 w-full">
                  <Image
                    src={companyHistory}
                    alt="Signing contract with major investor"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Signing contract with major investor
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea com consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Why Choose Us */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-4xl font-bold mb-4 text-black">
                    Why choose <span className="text-[#0063A8]">Vedanta</span>{" "}
                    for your business
                  </h2>
                </div>
                <div>
                  <p className="text-gray-600">
                    Totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione vol.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${activeSection * 100}%)`,
                    }}
                  >
                    {sectors.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="flex-shrink-0 w-full">
                        <div className="grid md:grid-cols-3">
                          {section.map((sector, index) => (
                            <div
                              key={index}
                              className="bg-gray-100 border p-8 text-start"
                            >
                              <Image
                                src={sector.icon}
                                alt={sector.title}
                                width={64}
                                height={64}
                                className="mx-auto mb-4"
                              />
                              <h3 className="text-xl font-bold mb-4">
                                {sector.title}
                              </h3>
                              <button className="bg-[#0063A8] text-white px-6 py-2  hover:bg-[#66CC33] transition-colors">
                                Read More
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  className={`h-3 w-3 rounded-full mx-1 ${
                    activeSection === 0 ? "bg-[#0063A8]" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveSection(0)}
                />
                <button
                  className={`h-3 w-3 rounded-full mx-1 ${
                    activeSection === 1 ? "bg-[#0063A8]" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveSection(1)}
                />
              </div>
            </div>
          </section>
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
              <h2 className="text-4xl font-bold text-center mb-4 text-black">
                Review from <span className="text-[#0063A8]">our clients</span>
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="relative max-w-4xl mx-auto">
                <button
                  onClick={prevReview}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
                >
                  &lt;
                </button>
                <button
                  onClick={nextReview}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
                >
                  &gt;
                </button>

                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-4xl text-gray-300 absolute top-4 right-4">
                    
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {reviews[currentReview].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {reviews[currentReview].content}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={reviews[currentReview].avatar}
                      alt={reviews[currentReview].author}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">
                        {reviews[currentReview].author}
                      </p>
                      <p className="text-gray-600">
                        {reviews[currentReview].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Add more sections as needed */}
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
