/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaCaretRight,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedin,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "@/components/Header/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const Blogcontent = () => {
  const contentData = [
    {
      image: "https://via.placeholder.com/150",
      title: "Title 1",
      subtitle: "Subtitle 1",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 2",
      subtitle: "Subtitle 2",
      paragraph: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 3",
      subtitle: "Subtitle 3",
      paragraph: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 4",
      subtitle: "Subtitle 4",
      paragraph: "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 5",
      subtitle: "Subtitle 5",
      paragraph: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 6",
      subtitle: "Subtitle 6",
      paragraph: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 7",
      subtitle: "Subtitle 7",
      paragraph: "Deserunt mollit anim id est laborum.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 8",
      subtitle: "Subtitle 8",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContent = contentData.filter((content) =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
     
     <Header/>
      <div className="w-full h-auto bg-white border border-black text-white flex justify-around items-center relative">
        <Image
          src={"https://www.vedantalimited.com/img/digi_inovation/banner.jpg"}
          alt={""}
          width={500}
          height={500}
          className="w-full h-[25rem] bg-cover"
        ></Image>
      <div className="absolute top-20">
<div className="text-5xl mb-4">
  <h1 className="text-orange-600">Blog Listing</h1>
</div>
<hr/>
<div className="text-2xl flex gap-2">
  <h1 className="text-orange-600">Home<span className="text-white">&gt;</span> </h1> <h1 className="">Blog Listing</h1>
</div>
      </div>
      </div>
      <div className="mt-20 w-full  md:flex justify-center gap-7  ">
        <div>
          {contentData.map((content, index) => (
            <div key={index} className="m-2 mt-7 bg-gray-100 ">
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-48 md:h-60 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mt-4">{content.title}</h2>
                <h3 className="text-lg text-gray-600">{content.subtitle}</h3>
                <p className="text-gray-700 mt-2">{content.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-[29%] w-[90%] mx-4">
        <div className="relative  mb-10 mt-7 ">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pl-5 pr-[6rem] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-3  top-5 transform -translate-y-2/4  " />
        </div>
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <div className=" mt-10  w-[100%]">
  <div className="mx-auto p-6 pb-1 border bg-white rounded-md shadow-dashboard">
    <div className="flex flex-wrap items-center justify-between mb-1 -m-2">
      <div className="w-auto p-2">
        <h2 className="text-lg font-semibold text-coolGray-900">Categories</h2>
    
      </div>
      <div className="w-auto p-2">
        <a
          href="#"
          className="text-sm text-green-500 hover:text-green-600 font-semibold"
          >See all</a >
      </div>
    </div>
    <div className="flex mt-5 flex-wrap">
      <div className="w-full border-b border-coolGray-100">
        <div className="flex flex-wrap items-center justify-between py-4 -m-2">
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center -m-2">
              <div className="w-auto p-2">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-yellow-50 rounded-md"
                >
             
                </div>
              </div>
              <div className="w-auto p-2">
                <h2 className="text-sm font-medium text-coolGray-900">Business</h2>
               
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="w-full border-b border-coolGray-100">
        <div className="flex flex-wrap items-center justify-between py-4 -m-2">
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center -m-2">
              <div className="w-auto p-2">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-md"
                >
               
                </div>
              </div>
              <div className="w-auto p-2">
                <h2 className="text-sm font-medium text-coolGray-900">consulting</h2>
               
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between py-4 -m-2">
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center -m-2">
              <div className="w-auto p-2">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-green-50 text-green-500 rounded-md"
                >
                
                </div>
              </div>
              <div className="w-auto p-2">
                <h2 className="text-sm font-medium text-coolGray-900">Technology</h2>
               
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between py-4 -m-2">
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center -m-2">
              <div className="w-auto p-2">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-green-50 text-green-500 rounded-md"
                >
                
                </div>
              </div>
              <div className="w-auto p-2">
                <h2 className="text-sm font-medium text-coolGray-900">ESG Vision</h2>
               
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between py-4 -m-2">
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center -m-2">
              <div className="w-auto p-2">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-green-50 text-green-500 rounded-md"
                >
                
                </div>
              </div>
              <div className="w-auto p-2">
                <h2 className="text-sm font-medium text-coolGray-900">Social Impact</h2>
               
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</div>
<div className=" mt-10  w-[100%]">
  <div className="mx-auto p-6 pb-1 border bg-white rounded-md shadow-dashboard">
    <div className="flex flex-wrap items-center justify-between mb-1 -m-2">
      <div className="w-auto p-2">
        <h2 className="text-lg font-semibold text-coolGray-900">Categories</h2>
    
      </div>
      <div className="w-auto p-2">
        <a
          href="#"
          className="text-sm text-green-500 hover:text-green-600 font-semibold"
          >See all</a >
      </div>
    </div>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</div>


    </div>
      </div>
    </div>
  );
};

export default Blogcontent;
