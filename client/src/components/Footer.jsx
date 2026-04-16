import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-raywhite-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold tracking-tighter mb-6">
              RAY WHITE <span className="text-raywhite-yellow">RESIDENTIAL</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading the way in Sydney CBD property since 1902. Our legacy is built on trust, innovation and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-raywhite-yellow font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Residential For Sale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Residential For Lease</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Upcoming Auctions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Appraisals</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-raywhite-yellow font-bold uppercase tracking-widest text-xs mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-raywhite-yellow font-bold uppercase tracking-widest text-xs mb-6">Contact Us</h3>
            <div className="text-sm text-gray-300 space-y-4">
              <p>Level 1, 44 Market Street,<br />Sydney NSW 2000</p>
              <p>Ph: (02) 1234 5678</p>
              <p>Email: sydney.cbd@raywhite.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Ray White Residential Sydney CBD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
