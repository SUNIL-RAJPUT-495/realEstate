import React from 'react'

export const TopBanner = () => {
  return (
    <div> <div className="w-full bg-[#f8f8f8] border-b border-gray-200 py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between gap-6">
                <p className="text-base text-gray-700 text-center md:text-left">
                    We bring the <span className="italic">whole</span> team to give you a powerful advantage
                </p>
                <a href="#" className="bg-[#ffe500] text-black font-bold px-8 py-3 uppercase tracking-wider flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
                    Learn More <span>&rarr;</span>
                </a>
            </div>
        </div></div>
  )
}
