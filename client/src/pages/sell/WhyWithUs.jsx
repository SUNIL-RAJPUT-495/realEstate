import React from 'react'

export const WhyWithUs = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-24">

        {/* Header Section (Centered) */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold block mb-4">
            SELL
          </span>
          <h1
            className="text-4xl md:text-5xl text-[#111]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, lineHeight: '1.2' }}
          >
            Why Sell With Us?
          </h1>
        </div>

        {/* Body Content */}
        <div className="space-y-6 text-gray-900 text-md leading-relaxed max-w-5xl mx-auto">
          <p>
            At Ray White Residential CBD we understand the importance of selecting the right agent
            and knowing that you are with the best to get the desired result.
          </p>

          <p>
            At the forefront to any professional and on-going relationship we consider our clients
            to be our most valuable asset. We aim to attentively listen to their needs and offer a
            personalised service with professional advice based on our excellent in-depth market
            knowledge and past market experience.
          </p>

          <p className="text-[#111] text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Success
          </p>

          <p>
            In 2013 in the CBD, Ray White Residential achieved a very strong conversion rate of
            over 90% from instruction to sale, whilst also achieving several record prices.
          </p>

          <p className="text-[#111] text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
            What to Expect
          </p>
        </div>

      </div>
    </div>
  )
}
