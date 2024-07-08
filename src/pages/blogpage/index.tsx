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
      <div className="w-full h-20 md:h-14 bg-black text-white flex justify-around items-center">
        <div className="md:flex justify-around w-full items-center  my-4">
          <h1 className="text-center">Welcome to vedanta</h1>
          <div className="flex justify-center my-4 gap-2">
            <FaFacebookF />
            <FaTwitter />
            <FaGooglePlusG />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-white text-black border border-black flex justify-center items-center">
        <div className="w-[60%]">
          <Image
            src={"/vedanta-logo.svg"}
            alt={""}
            width={500}
            height={500}
            className="w-full h-full bg-cover my-4"
          ></Image>
          <h1 className="flex gap-2 my-2">
            <span>
              <LuPhoneCall className="h-8 w-8 mt-2" />
            </span>
            <span>
            Call us 9:00am - 6:00pm
            <br/>
            <span className="font-bold">222-121-4562</span>
            </span>
          </h1>
          <h1 className="flex gap-2 my-2">
            <span>
             <MdOutlineAccessTime className="h-8 w-8 mt-2" />
            </span>
            <span>
            Monday to Friday
            <br />
            <span className="font-bold"> 9:00am - 6:00pm </span>
            </span>
          </h1>
          <h1 className="flex gap-2 my-4 pb-5">
            <span>
            <CiMail  className="h-8 w-8 mt-2" />
            </span>
            <span>
            E-mail us
            <br />
            <span className="font-bold">
            support@gmail.com</span>
            </span>
          </h1>
          
        </div>
      </div>
      <div className="w-full h-auto bg-white border border-black text-white flex justify-around items-center relative">
        <Image
          src={"/thumb_720_450_dreamstime_m_2401021_1.jpg"}
          alt={""}
          width={500}
          height={500}
          className="w-full h-full bg-cover"
        ></Image>
        <div className="absolute -top-1 w-[90%] h-[4rem] bg-white flex">
<div className="w-1/2 bg-white h-full flex justify-center items-center">
<GiHamburgerMenu />
</div>
<div className="w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 h-full items-center flex justify-center">
  <h1 className="text-center  text-xl flex gap-0">Get a Quote <FaCaretRight className="mt-1.5" /></h1>
  
</div>
        </div>
      </div>
      <div className="mt-20 w-full  flex justify-center gap-7  ">
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
      </div>
    </div>
  );
};

export default Blogcontent;
