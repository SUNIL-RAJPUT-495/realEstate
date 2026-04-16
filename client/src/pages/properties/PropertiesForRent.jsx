import React from 'react'
import { useState } from 'react'

export const PropertiesForRent = () => {
      const properties = [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          type: "Apartment for Sale",
          price: "Price Guide: $5 - $5.25 ...",
          address: "18A/171 Gloucester Street, Sydney",
          beds: 3,
          baths: 2,
          cars: 2,
          badge: null
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          type: "Apartment for Sale",
          price: "Buyer Guide:$1,500,000",
          address: "23F/6 Watermans Quay, Barangaroo",
          beds: 1,
          baths: 1,
          cars: 0,
          badge: "OPEN SATURDAY"
        }
      ];
      const [activeSort, setActiveSort] = useState('Listed At');
      const sortOptions = ['Listed At', 'Updated At', 'Price: Lowest', 'Price: Highest'];
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans bg-white">

      {/* --- Top Bar (Results & Sorting) --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">

        {/* Left Side: Results Info */}
        <div className="text-[15px] text-[#333]">
          Showing 1-20 of 20 results with <span className="bg-gray-100 px-2 py-1 ml-1 text-gray-700 rounded-sm">no filters</span>
        </div>

        {/* Right Side: Sorting Options */}
        <div className="flex gap-5 text-[15px] font-medium text-[#333]">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveSort(option)}
              className={`pb-1 transition-all ${activeSort === option
                  ? 'border-b-[3px] border-[#ffe512] text-black'
                  : 'text-gray-600 hover:text-black'
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* --- Properties Grid (Mapped Data) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {properties.map((property) => (
          <div key={property.id} className="group cursor-pointer flex flex-col">

            {/* Image Section */}
            <div className="relative w-full h-[320px] overflow-hidden mb-4 bg-gray-100">
              <img
                src={property.image}
                alt={property.address}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Yellow Badge (Conditional Render) */}
              {property.badge && (
                <div className="absolute top-0 right-0 bg-[#ffe512] text-black text-[11px] font-bold px-4 py-2 uppercase tracking-widest z-10">
                  {property.badge}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col">

              {/* Type & Price Row */}
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[15px] text-[#888]">
                  {property.type}
                </span>
                <span className="text-[15px] text-[#333] font-medium">
                  {property.price}
                </span>
              </div>

              {/* Address */}
              <h3 className="text-lg font-bold text-[#111] mb-2 leading-snug">
                {property.address}
              </h3>

              {/* Specs (Beds / Baths / Cars) */}
              <div className="flex items-center text-[15px] text-[#555] font-medium space-x-2">
                <span>{property.beds} {property.beds > 1 ? 'Beds' : 'Bed'}</span>

                <span className="text-gray-300 font-light">/</span>

                <span>{property.baths} {property.baths > 1 ? 'Baths' : 'Bath'}</span>

                {property.cars > 0 && (
                  <>
                    <span className="text-gray-300 font-light">/</span>
                    <span>{property.cars} {property.cars > 1 ? 'Cars' : 'Car'}</span>
                  </>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
