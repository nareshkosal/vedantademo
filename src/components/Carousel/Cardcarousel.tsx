import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-80 p-8 overflow-hidden rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.320,1)] hover:shadow-none group">
      <div className="flex flex-col items-start gap-5 text-[#e8e8e8] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.320,1)]">
        <p className="text-3xl font-bold">Card Hover Effect</p>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          laboriosam at voluptas minus culpa deserunt delectus sapiente
          inventore pariatur
        </p>
        <button className="px-3 py-2 font-semibold rounded text-[#e8e8e8] bg-gradient-to-br from-[#f89b29] to-[#ff0f7b] shadow-md transition-all duration-300 hover:text-[#212121] hover:bg-[#e8e8e8] group-hover:bg-[#e8e8e8] group-hover:text-[#212121] hover:outline hover:outline-2 hover:outline-[#e8e8e8] active:shadow-none">
          Read more
        </button>
      </div>
      <div className="absolute inset-x-0 top-0 h-[5px] bg-gradient-to-r from-[#f89b29] to-[#ff0f7b] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.320,1)] group-hover:h-full -z-10"></div>
    </div>
  );
};

export default Card;