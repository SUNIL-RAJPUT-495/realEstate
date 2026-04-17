import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white group cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-raywhite-yellow text-raywhite-dark px-3 py-1 font-bold text-xs uppercase tracking-wider">
          {property.status}
        </div>
      </div>
      
      <div className="p-6 border-x border-b border-gray-100">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-raywhite-dark group-hover:text-raywhite-yellow transition-colors">
            Price Guide: ₹{property.price}
          </h3>
          <div className="flex space-x-4 text-gray-500 text-sm">
            <span className="flex items-center"><i className="mr-1">🛏️</i> {property.beds}</span>
            <span className="flex items-center"><i className="mr-1">🛁</i> {property.baths}</span>
            <span className="flex items-center"><i className="mr-1">🚗</i> {property.cars}</span>
          </div>
        </div>
        
        <p className="text-gray-600 font-medium mb-1 truncate">
          {property.address}
        </p>
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          {property.suburb}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
