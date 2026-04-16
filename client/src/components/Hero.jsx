import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src="/hero.png" 
        alt="Modern Sydney CBD Lifestyle" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg leading-tight">
          Find your property in <br /><span className="text-raywhite-yellow">Sydney CBD</span>
        </h2>

        {/* Search Bar Container */}
        <div className="bg-white p-2 shadow-2xl flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
          <div className="flex-1 w-full relative">
             <input 
              type="text" 
              placeholder="Search by suburb, postcode or address" 
              className="w-full h-14 pl-4 text-gray-800 focus:outline-none placeholder-gray-500 font-medium"
            />
          </div>
          <div className="w-full md:w-48 bg-gray-50 h-14 border-x border-gray-100 flex items-center">
            <select className="bg-transparent w-full h-full px-4 text-raywhite-dark font-semibold focus:outline-none appearance-none cursor-pointer">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>
          <button className="w-full md:w-48 bg-raywhite-yellow text-raywhite-dark h-14 font-bold flex items-center justify-center hover:bg-black hover:text-white transition-all">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            SEARCH
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-6 text-sm font-semibold tracking-widest uppercase">
          <span className="cursor-pointer hover:text-raywhite-yellow border-b-2 border-raywhite-yellow pb-1">Buy</span>
          <span className="cursor-pointer hover:text-raywhite-yellow">Rent</span>
          <span className="cursor-pointer hover:text-raywhite-yellow">Sold</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
