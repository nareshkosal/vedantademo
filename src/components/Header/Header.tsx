/* eslint-disable react/jsx-no-undef */
import { FaIndustry, FaPhoneAlt, FaClock, FaEnvelope, FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { RefObject, useEffect, useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
    const dropdownTimeoutRef = useRef<number | null>(null);
    const stickyHeaderRef: RefObject<HTMLDivElement> = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const stickyHeader = stickyHeaderRef.current;
        if (stickyHeader) {
            const sticky = stickyHeader.offsetTop;
            if (window.pageYOffset > sticky) {
                stickyHeader.classList.add("sticky");
            } else {
                stickyHeader.classList.remove("sticky");
            }
        }
    };
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = (index: number) => {
        setDropdownOpen(index);
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
            dropdownTimeoutRef.current = null;
        }
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = window.setTimeout(() => {
            setDropdownOpen(null);
        }, 300);
    };

    const renderNavItems = (isModal: boolean) => (
        <ul className={`md:flex gap-8 items-center font-semibold w-full ${isModal ? 'flex-col text-center' : ''}`}>
            <li className="relative nav-item">
            <Link href={'/'}><button
    className="focus:outline-none flex items-center"
    onMouseEnter={() => !isModal && handleMouseEnter(1)}
    onMouseLeave={() => !isModal && handleMouseLeave()}
>
    Home {isModal ? null : <FaChevronDown className="ml-1 text-xs text-red-500" />}
</button></Link>
{/* 
                {dropdownOpen === 1 && !isModal && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-20"
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Home Page 1</a></li>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Home Page 2</a></li>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Home Page 3</a></li>
                    </ul>
                )} */}
            </li>
            <li className="nav-item"><a href="about" className="">About Us</a></li>
            <li className="relative nav-item">
                <button
                    className=" focus:outline-none flex items-center"
                    onMouseEnter={() => !isModal && handleMouseEnter(2)}
                    onMouseLeave={() => !isModal && handleMouseLeave}
                >
                    Services {isModal ? null : <FaChevronDown className="ml-1 text-xs text-red-500" />}
                </button>
                {dropdownOpen === 2 && !isModal && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-20"
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Service 1</a></li>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Service 2</a></li>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Service 3</a></li>
                    </ul>
                )}
            </li>
            <li className="relative nav-item">
                <button
                    className=" focus:outline-none flex items-center"
                    onMouseEnter={() => !isModal && handleMouseEnter(3)}
                    onMouseLeave={() => !isModal && handleMouseLeave}
                >
                    Shop {isModal ? null : <FaChevronDown className="ml-1 text-xs text-red-500" />}
                </button>
                {dropdownOpen === 3 && !isModal && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-20"
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={handleMouseLeave}>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Shop 1</a></li>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Shop 2</a></li>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Shop 3</a></li>
                    </ul>
                )}
            </li>
            <li className="relative nav-item">
                <button
                    className=" focus:outline-none flex items-center"
                    onMouseEnter={() => !isModal && handleMouseEnter(4)}
                    onMouseLeave={() => !isModal && handleMouseLeave}
                >
                    Pages {isModal ? null : <FaChevronDown className="ml-1 text-xs text-red-500" />}
                </button>
                {dropdownOpen === 4 && !isModal && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-20"
                        onMouseEnter={() => handleMouseEnter(4)}
                        onMouseLeave={handleMouseLeave}>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Page 1</a></li>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Page 2</a></li>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Page 3</a></li>
                    </ul>
                )}
            </li>
            <li className="relative nav-item">
             <Link href={'/blogpage'}>   <button
                    className=" focus:outline-none flex items-center"
                    onMouseEnter={() => !isModal && handleMouseEnter(5)}
                    onMouseLeave={() => !isModal && handleMouseLeave}
                >
                    Blog {isModal ? null : <FaChevronDown className="ml-1 text-xs text-red-500" />}
                </button></Link>
                {/* {dropdownOpen === 5 && !isModal && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-20"
                        onMouseEnter={() => handleMouseEnter(5)}
                        onMouseLeave={handleMouseLeave}>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Blog 1</a></li>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Blog 2</a></li>
                        <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Blog 3</a></li>
                    </ul>
                )} */}
            </li>
            <li className="nav-item"><a href="#" className="">Contact Us</a></li>
        </ul>
    );

    return (
        <>
            <div className='relative w-full'>
                <div className='flex bg-orange-100'>
                    <div className="h-32 w-1/3 pb-4 pr-7 bg-orange-100 flex pt- justify-start">
                    <Image
            src={"/vedanta-logo.svg"}
            alt={""}
            width={500}
            height={500}
            className="w-[75%] ml-20 mb-10 h-full bg-cover "
          ></Image>
                    </div>

                    <div className="bg-slate-800 md:flex px-4 pt-6 justify-around w-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0% 100%)' }}>
                        <div className="flex mt-2">
                            <FaPhoneAlt size={20} className='text-white m-2' />
                            <div>
                                <p className="text-red-600">Call us 9:00am - 6:00pm</p>
                                <p className='text-white'>222-111-2254</p>
                            </div>
                        </div>

                        <div className="flex mt-2">
                            <FaClock size={20} className='text-white m-2' />
                            <div>
                                <p className="text-red-600">Monday to Friday</p>
                                <p className='text-white'>9:00am - 6:00pm</p>
                            </div>
                        </div>

                        <div className="flex mt-2">
                            <FaEnvelope size={20} className='text-white m-2' />
                            <div>
                                <p className="text-red-600">E-mail us</p>
                                <p className='text-white'>support@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    ref={stickyHeaderRef}
                    className="flex w-full h-14 absolute -bottom-7 items-center z-10 justify-between px-7 transition-all duration-300"
                >                    <div className='flex bg-white h-full px-3 flex-row ml-4'>
                        <button className=" text-black focus:outline-none" onClick={toggleMenu}>
                            <FaBars size={24} />
                        </button>
                    </div>

                    <div className="flex-1 hidden md:flex gap-2 justify-center bg-white h-full px-5 items-center ">
                        {renderNavItems(false)}
                    </div>

                    <div
                        className="relative ml-6 mr-4 bg-red-600 px-16 text-white h-full flex items-center hover:bg-gray-800 cursor-pointer"
                        style={{
                            transform: 'skewX(-12deg)',
                            transformOrigin: 'right',
                            transition: 'all 0.4s ease',
                            letterSpacing: '0.01em',
                            lineHeight: '1em',
                            position: 'relative',
                            background: '#fe5a0e',
                            color: '#ffffff',
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            padding: '26.5px 39px'
                        }}
                    >
                        <h1 className="relative underline z-10">Get a quote</h1>
                    </div>
                </div>
            </div>

            {isOpen && (
  <Modal isOpen={isOpen} onClose={toggleMenu}>
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-white w-3/4 h-3/4 p-4 rounded-xl bg-gradient-to-r from-slate-900 via-green-950 to-slate-900"
        style={{ backgroundImage: '', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className='text-white'>
          {renderNavItems(true)}
        </nav>
      </div>
    </div>
  </Modal>
)}

        </>
    );
}
