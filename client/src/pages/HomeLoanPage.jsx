import React from 'react';

export const HomeLoanPage = () => {
  const calculators = [
    {
      title: "Loan Repayment Calculator",
      linkText: "View Calculator →",
      icon: (
        <svg className="w-8 h-8 text-[#0055ff] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "How Much Can I Borrow",
      linkText: "View Calculator →",
      icon: (
        <svg className="w-8 h-8 text-[#0055ff] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Stamp Duty Calculator",
      linkText: "View Calculator →",
      icon: (
        <svg className="w-8 h-8 text-[#0055ff] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    }
  ];

  return (
    <main className="bg-[#f5f5f5] min-h-screen pb-20 font-sans">
        
        {/* Main Content Area in White Box */}
        <div className="max-w-[1000px] mx-auto  px-4">
            <div className=" p-8 md:p-16">
                
                {/* Logo & Header Section (Centered) */}
                <div className="text-center mb-12">
                    {/* Placeholder for Loan Market Logo */}
                    <div className="w-20 h-20 bg-[#0055ff] text-white flex items-center justify-center font-bold text-3xl mx-auto mb-8 rounded-sm shadow-md">
                        LM
                    </div>

                    <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold block mb-2">
                        Partners
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">
                        Loan Market
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl font-bold text-black max-w-2xl mx-auto leading-snug">
                        There’s a reason most Aussies turn to a broker for their home loan.
                    </h2>
                </div>
                
                {/* Text Content */}
                <div className="text-gray-700 text-base md:text-[17px] leading-relaxed text-center max-w-3xl mx-auto mb-12">
                    <p className="mb-6">
                        Loan Market brokers have access to over 60 lenders and take the time to understand your goals to find the right loan for you.
                    </p>
                    <p className="mb-8">
                        Online, offline, anytime. Get your finances sorted today and bid with confidence.
                    </p>
                    
                    <button className="bg-[#333] text-white font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-black transition-colors duration-300">
                        Contact Loan Market &rarr;
                    </button>
                </div>

                <hr className="border-t border-gray-200 my-16" />

                {/* Loan Calculators Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-serif text-[#111] text-center mb-4">Loan Calculators</h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        We have a range of tools to help you understand your borrowing power, estimate your repayments and calculate your stamp duty.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {calculators.map((calc, idx) => (
                            <a key={idx} href="#" className="block bg-gray-50 border border-gray-100 p-8 rounded-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                                {calc.icon}
                                <h4 className="font-bold text-lg text-black mb-6 pr-4">
                                    {calc.title}
                                </h4>
                                <span className="text-[#0055ff] font-semibold text-sm uppercase tracking-wide group-hover:text-blue-800 transition-colors">
                                    {calc.linkText}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                <hr className="border-t border-gray-200 my-16" />

                {/* Achievements Section */}
                <div className="text-center">
                    <h3 className="text-md font-semibold uppercase tracking-[0.2em] text-gray-500 mb-8">
                        Our Achievements - celebrating 25 years of broking excellence
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Badges */}
                        <div className="w-24 h-24 rounded-full border-4 border-[#ffe500] flex items-center justify-center font-bold text-xs text-center p-2 text-black">TOP 100 BROKER</div>
                        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center font-bold text-xs text-center p-2 text-blue-800">5 STAR RATED</div>
                        <div className="w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center font-bold text-xs text-center p-2">25 YEARS EXCELLENCE</div>
                    </div>
                </div>

            </div>
        </div>
    </main>
  )
}
