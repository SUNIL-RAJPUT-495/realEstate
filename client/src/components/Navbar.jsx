import React, { useState } from 'react';
import AppraisalForm from '../components/forms/AppraisalForm'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onOpenSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
const [isAppraisalOpen, setIsAppraisalOpen] = useState(false);
const navigate = useNavigate();
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold tracking-tighter text-raywhite-dark">
              RAY WHITE <span className="bg-raywhite-yellow px-1">RESIDENTIAL</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wide">
            <button onClick={() => navigate("/")} className="hover:text-raywhite-yellow transition-colors uppercase tracking-wide font-medium">Home</button>
            <button onClick={() => onOpenSidebar('buy')} className="hover:text-raywhite-yellow transition-colors uppercase tracking-wide font-medium">Buy</button>
            <button onClick={() => onOpenSidebar('rent')} className="hover:text-raywhite-yellow transition-colors uppercase tracking-wide font-medium">Rent</button>
            <button onClick={() => onOpenSidebar('buildings')} className="hover:text-raywhite-yellow transition-colors uppercase tracking-wide font-medium">Buildings</button>
            <button onClick={() => onOpenSidebar('sell')} className="hover:text-raywhite-yellow transition-colors uppercase tracking-wide font-medium">Sell</button>
            <button onClick={() => onOpenSidebar("/about")} className="hover:text-raywhite-yellow transition-colors uppercase tracking-wide font-medium">+More</button>
            <button onClick={() => setIsAppraisalOpen(true)} className="bg-raywhite-yellow text-raywhite-dark px-4 py-2 hover:bg-black hover:text-white transition-all">
              BOOK A FREE APPRAISAL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-raywhite-dark focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button onClick={() => { setIsOpen(false); onOpenSidebar('buy'); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 uppercase">Buy</button>
            <button onClick={() => { setIsOpen(false); onOpenSidebar('rent'); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 uppercase">Rent</button>
            <button onClick={() => { setIsOpen(false); onOpenSidebar('buildings'); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 uppercase">Building Profiles</button>
            <button onClick={() => { setIsOpen(false); onOpenSidebar('sell'); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 uppercase">Sell</button>
            <button onClick={() => { setIsOpen(false); onOpenSidebar('/about'); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 uppercase">About</button>
            <button  className="w-full text-center bg-raywhite-yellow text-raywhite-dark px-4 py-3 mt-4 font-bold uppercase transition-all">
              CONTACT US
            </button>
          </div>
        </div>
      )}
      <AppraisalForm 
        isOpen={isAppraisalOpen} 
        onClose={() => setIsAppraisalOpen(false)}
      >
      </AppraisalForm>
    </nav>
  );
};

export default Navbar;
