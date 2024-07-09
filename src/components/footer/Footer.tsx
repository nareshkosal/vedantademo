import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white py-6">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Get in <span className="text-orange-500">Touch</span></h3>
            <p>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-orange-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m-6 0v12a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2H9l-6-4v16M3 9h8m0 0h10" />
              </svg>
              <div>
                <p className="font-bold">Call us on</p>
                <p>222-121-4562</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-orange-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h2a2 2 0 012 2v6M16 16h2m-4-4h1a2 2 0 012 2v6M12 12h1m-4-4h1a2 2 0 012 2v6m1-6h2M9 12H8a2 2 0 00-2 2v6M9 16H7m4-4H9m-4-4H4a2 2 0 00-2 2v6M5 12h.01M5 16h.01M5 20h.01M20 12v1.5a2.5 2.5 0 005 0V8a2 2 0 00-2-2h-4.5a2.5 2.5 0 100 5H20z" />
              </svg>
              <div>
                <p className="font-bold">Email us</p>
                <p>support@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white text-black py-8">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/path/to/your/logo.png" alt="Company Logo" className="mb-4" />
            <h6 className="font-bold text-lg">About us</h6>
            <p>Many of our SELC registered employees are requested as main preferred temporary staff when a service.</p>
          </div>
          <div>
            <h6 className="font-bold text-lg mb-4">Links</h6>
            <ul>
              <li><a className="text-gray-600 hover:text-black" href="#">Home</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">About Us</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Services</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Project</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Pages</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Blog</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-lg mb-4">Services</h6>
            <ul>
              <li><a className="text-gray-600 hover:text-black" href="#">Engineering</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Petroleum & Gas</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Power & Energy</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Mechanical Engineering</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Agricultural Processing</a></li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <h6 className="font-bold text-lg mb-4">Subscribe Today</h6>
            <p className="mb-4">Many of our SELC registered employees are requested as main</p>
            <form>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded" />
              <button className="bg-orange-500 text-white px-4 py-2 rounded w-full">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="container mx-auto px-8 text-center mt-8">
          <p className="text-gray-600">&copy; Copyright Industria 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
