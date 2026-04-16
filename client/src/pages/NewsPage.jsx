import React from 'react'

export const NewsPage = () => {
  const newsItems = [
    {
        id: 1,
        title: "Ray White Group appoints Thomas McGlynn to newly created CEO role",
        date: "28 FEB 2024",
        category: "NEWS & MEDIA",
        excerpt: "Ray White, Australasia’s largest real estate group, is proud to announce the appointment of Thomas McGlynn to the newly created role of CEO – Ray White Group.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 2,
        title: "Brisbane's real estate industry unites for women's homelessness at inaugural Pink Tie Gala",
        date: "26 FEB 2024",
        category: "NEWS & MEDIA",
        excerpt: "Brisbane's real estate community is channelling its expertise in finding homes toward its most urgent cause yet, supporting women facing homelessness across the city.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 3,
        title: "Strong auction results mark the end of Summer",
        date: "24 FEB 2024",
        category: "NEWS & MEDIA",
        excerpt: "It was a fitting farewell to summer today as the strong auction momentum from February rolled right into the final weekend of the season.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <main className="bg-white min-h-screen pb-20 font-sans">
      

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 mt-16">
          
          {/* Header Section (Centered) */}
          <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold block mb-4">
                  UP TO DATE
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-[#111]">
                  News
              </h1>
          </div>
          
          {/* News List */}
          <div className="space-y-16">
              {newsItems.map((news) => (
                  <article key={news.id} className="pb-16 border-b border-gray-200 last:border-0 last:pb-0">
                      <a href="#" className="block mb-6 group overflow-hidden relative">
                         <div className="aspect-[16/9] md:aspect-[2/1] w-full overflow-hidden bg-gray-100">
                             <img 
                                src={news.image} 
                                alt={news.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                             />
                         </div>
                      </a>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold tracking-wider uppercase mb-4">
                          <span>{news.date}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span>{news.category}</span>
                      </div>
                      
                      <a href="#" className="block group">
                          <h3 className="text-3xl md:text-4xl font-serif text-[#111] mb-5 group-hover:text-gray-500 transition-colors duration-300 leading-[1.25]">
                              {news.title}
                          </h3>
                      </a>
                      
                      <p className="text-gray-600 mb-8 leading-relaxed text-[15px] md:text-base">
                          {news.excerpt}
                      </p>
                      
                      <div className="text-center">
                          <a href="#" className="inline-block text-xs font-bold text-[#111] uppercase tracking-[0.15em] border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
                              Read Full Post
                          </a>
                      </div>
                  </article>
              ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 border-t border-gray-200 pt-8 flex justify-between items-center text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#111]">
              <button className="hover:text-gray-500 transition-colors opacity-50 cursor-not-allowed flex items-center gap-2">
                  <span>&larr;</span> Previous
              </button>
              <button className="hover:text-gray-500 transition-colors flex items-center gap-2">
                  Next <span>&rarr;</span>
              </button>
          </div>
      </div>
    </main>
  )
}
