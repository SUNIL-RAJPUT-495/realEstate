import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-gray-50 text-center font-sans">
        <h1 className="text-9xl font-serif font-extrabold text-[#111] mb-2 tracking-tighter drop-shadow-sm">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Page Not Found</h2>
        <p className="text-gray-500 max-w-lg mb-10 text-[17px] leading-relaxed">
            Oops! It seems the property or page you are looking for no longer exists, has been moved, or you typed the URL incorrectly.
        </p>
        <Link 
            to="/" 
            className="bg-[#ffe500] text-black font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-black hover:text-white transition-colors duration-300 shadow-sm"
        >
            Return to Homepage
        </Link>
    </div>
  )
}
