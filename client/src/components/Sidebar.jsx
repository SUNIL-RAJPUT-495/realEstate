import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = ({ isOpen, onClose }) => {
  // Prevent scrolling on body when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // State for Accordion Menu (Default 'Rent' open jaisa image me hai)
  const [openMenu, setOpenMenu] = useState('Rent');

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  const menuItems = [
    { title: 'Buy', link: '/buy' ,
      // hasSubmenu: true ,
        // submenu: [
        //     {label: 'Recently Listed', link: '/buy/recently-listed'},
        //     {label: 'Residential', link: '/buy/residential'},
        //     {label: 'Open For Inspection', link: '/buy/open'},
        //     {label: 'Auctions', link: '/buy/auctions'},
        //     {label: 'Buyer Alert', link: '/buy/alert'},
        //     {label: 'Advice on Buying', link: '/buy/advice'},
        //     {label: 'Overseas Buyers', link: '/buy/overseas'}
        //   ]
    },
    { title: 'Building Profiles', link: '/buildings' ,
      //  hasSubmenu: true,
        // submenu: [
        //     {label: 'Building Profiles', link: '/buildings'},
        //     {label: 'Circular Quay and Macquarie Street', link: '/buildings/circular-quay'},
        //     {label: 'City Fringe and Surry Hills', link: '/buildings/surry-hills'},
        //     {label: 'Darling Harbour', link: '/buildings/darling-harbour'},
        //     {label: 'Haymarket', link: '/buildings/haymarket'},
        //     {label: 'Hyde Park Precinct', link: '/buildings/hyde-park'},
        //     {label: 'Kent Street Precinct', link: '/buildings/kent-street'},
        //     {label: 'Mid City Precinct', link: '/buildings/mid-city'},
        //     {label: 'Walsh Bay and The Rocks', link: '/buildings/walsh-bay'}
        //   ]
     },
    {
      title: 'Rent', link: '/rent' ,
      // hasSubmenu: true,
      // submenu: [
      //   {label: 'Recently Listed', link: '/rent/recently-listed'},
      //   {label: 'Ray White Insurance', link: '/rent/insurance'},
      //   {label: 'Residential', link: '/rent/residential'},
      //   {label: 'Open For Inspection', link: '/rent/open'},
      //   {label: 'Property Management', link: '/rent/management'},
      //   {label: 'Rental Appraisal', link: '/rent/appraisal'},
      //   {label: 'Commercial', link: '/rent/commercial'}
      // ]
    },
    {
      title: 'Sell', link: '/sell' ,
      // hasSubmenu: true,
      // submenu: [
      //   {label: 'Why Sell With Us?', link: '/sell/why-us'},
      //   {label: 'Testimonials', link: '/sell/testimonials'},
      //   {label: 'Recent Sales', link: '/sell/recent-sales'},
      //   {label: 'Property Appraisal', link: '/sell/appraisal'},
      //   {label: 'Advice on Selling', link: '/sell/advice'}
      // ]
    },
     {
      title: 'About Us',
      hasSubmenu: true,
      submenu: [
        {label: 'Contact', link: '/about/contact'},
        {label: 'Our Team', link: '/about/team'},
        {label: 'Welcome to Ray White', link: '/about/welcome'},
        {label: 'Careers', link: '/about/careers'}
      ]
    },
    {title:'Testimonial', link: '/testimonials'},
    {title:'Home loans', link: '/home-loans'},
    {title:'Concierge', link:'/concierge'},
    {title:'News', link: '/news'},
  ];

  return (
    <>
      {/* Overlay Background */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`} 
        onClick={onClose}
      />
      
      {/* Off-canvas Sidebar Panel (Left Side Slide-in) */}
      <div 
        className={`fixed top-0 left-0 h-full w-full sm:w-[350px] bg-[#363636] z-[110] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col p-8 shadow-2xl overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        
        {/* Top Section: Close Button & Logo */}
        <div className="flex items-start gap-6 mb-6">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="w-11 h-11 rounded-full border border-[#555] flex items-center justify-center text-[#ccc] hover:border-white hover:text-white transition-all mt-1 focus:outline-none"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Yellow Logo Box */}
          <div className="bg-[#ffe512] w-28 h-28 flex flex-col justify-end p-2 pb-3">
            <span className="text-[#333] font-bold text-2xl tracking-tighter" style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}>
              RayWhite.
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-gray-200 text-[15px] mb-8 tracking-wide">
          Residential Sydney CBD
        </div>

        {/* Thin Horizontal Divider */}
        <hr className="border-t border-[#555] mb-10" />

        {/* Navigation Menu */}
        <div className="space-y-6 flex-grow">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.title === 'About Us' && <hr className="border-t border-[#555] mb-6" />}
              
              {item.hasSubmenu ? (
                <button
                  onClick={() => toggleMenu(item.title)}
                  className="w-full flex items-center justify-between text-[17px] text-white hover:text-gray-300 transition-colors focus:outline-none"
                >
                  <span>{item.title}</span>
                  <span className="text-[10px] text-[#777]">
                    {openMenu === item.title ? '▲' : '▼'}
                  </span>
                </button>
              ) : (
                <Link
                  to={item.link || '#'}
                  onClick={onClose}
                  className="w-full flex items-center justify-between text-[17px] text-white hover:text-gray-300 transition-colors focus:outline-none"
                >
                  <span>{item.title}</span>
                </Link>
              )}

              {/* Submenu Items with smooth expand/collapse */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openMenu === item.title ? 'max-h-[500px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}
              >
                {item.submenu && (
                  <div className="space-y-5 pl-5">
                    {item.submenu.map((subItem, subIndex) => {
                      const label = typeof subItem === 'string' ? subItem : subItem.label;
                      const link = typeof subItem === 'string' ? '#' : (subItem.link || '#');
                      return (
                        <Link
                          key={subIndex}
                          to={link}
                          onClick={onClose}
                          className="block text-[15px] text-gray-300 hover:text-white transition-colors"
                        >
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};