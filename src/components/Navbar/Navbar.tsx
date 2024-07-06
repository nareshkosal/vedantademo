// components/Navbar.js
import { useState, useRef } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const dropdownTimeoutRef = useRef<number | null>(null); // Ref to hold timeout ID

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (index: number) => {
    setDropdownOpen(index);
    // Clear any existing timeout to prevent premature close
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    // Set timeout to close dropdown after 300ms
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setDropdownOpen(null);
    }, 300);
  };

  return (
    <nav className="bg-white p-4 relative z-10">
      <div className="container mx-auto flex items-center gap-6">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-black ">
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="md:flex items-center space-x-6 font-semibold">
            <li className="relative nav-item">
              <button
                className="text-black focus:outline-none flex items-center"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                Home <FaChevronDown className="ml-1 text-xs text-red-500" />
              </button>
              {dropdownOpen === 1 && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-20"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}>
                  <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Home Page 1</a></li>
                  <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Home Page 2</a></li>
                  <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Home Page 3</a></li>
                </ul>
              )}
            </li>
            <li className="nav-item h-full"><a href="#" className="text-black">About Us</a></li>
            <li className="relative nav-item">
              <button
                className="text-black focus:outline-none flex items-center"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                Services <FaChevronDown className="ml-1 text-xs text-red-500" />
              </button>
              {dropdownOpen === 2 && (
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
                className="text-black focus:outline-none flex items-center"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                Shop <FaChevronDown className="ml-1 text-xs text-red-500" />
              </button>
              {dropdownOpen === 3 && (
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
                className="text-black focus:outline-none flex items-center"
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
              >
                Pages <FaChevronDown className="ml-1 text-xs text-red-500" />
              </button>
              {dropdownOpen === 4 && (
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
              <button
                className="text-black focus:outline-none flex items-center"
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={handleMouseLeave}
              >
                Blog <FaChevronDown className="ml-1 text-xs text-red-500" />
              </button>
              {dropdownOpen === 5 && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-20"
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}>
                  <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Blog 1</a></li>
                  <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Blog 2</a></li>
                  <li className="p-2 hover:bg-red-500 hover:text-white"><a href="#" className="">Blog 3</a></li>
                </ul>
              )}
            </li>
            <li className="nav-item h-full"><a href="#" className="text-black">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
