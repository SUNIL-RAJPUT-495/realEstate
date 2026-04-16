import React, { useState } from 'react';

const ListingTabs = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
    onTabChange(id);
  };

  return (
    <div className="flex flex-wrap justify-center border-b border-gray-100 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`px-8 py-5 text-sm font-bold uppercase tracking-widest transition-all relative ${
            activeTab === tab.id 
              ? 'text-raywhite-dark border-b-4 border-raywhite-yellow' 
              : 'text-gray-400 hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ListingTabs;
