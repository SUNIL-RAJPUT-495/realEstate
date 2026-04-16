import React from 'react'
import Hero from '../components/Hero';
import ListingTabs from '../components/ListingTabs';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { useState } from 'react';

export const HomePage = () => {
    const [activeCategory, setActiveCategory] = useState('new');

    const tabs = [
        { id: 'new', label: 'New Listings' },
        { id: 'open-soon', label: 'Open Soon' },
        { id: 'upcoming', label: 'Upcoming Auctions' }
    ];
    const filteredProperties = properties.filter(prop => prop.category === activeCategory);
    return (
        <div>
            <Hero />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Featured Properties</h2>
                    <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Our <span className="text-raywhite-yellow">Latest</span> Listings</h3>
                </div>

                <ListingTabs
                    tabs={tabs}
                    onTabChange={(id) => setActiveCategory(id)}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="border-2 border-raywhite-dark px-10 py-4 font-bold uppercase tracking-widest hover:bg-raywhite-dark hover:text-white transition-all">
                        View All Properties
                    </button>
                </div>
            </main>

            {/* About Section (Aesthetic enhancement) */}
            <section className="bg-raywhite-gray py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">About Ray White</h2>
                            <h3 className="text-4xl font-bold uppercase mb-8">Expertise that <br /><span className="text-raywhite-yellow">delivers results</span></h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Ray White Residential Sydney CBD is the premier agency for luxury city living. Our team combines deep local knowledge with the reach of Australasia's largest real estate group.
                            </p>
                            <button className="bg-raywhite-yellow text-raywhite-dark px-8 py-3 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                                Read Our Story
                            </button>
                        </div>
                        <div className="relative h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                                alt="Sydney CBD Office"
                                className="w-full h-full object-cover shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-raywhite-yellow p-8 hidden md:block">
                                <p className="text-4xl font-bold">120+</p>
                                <p className="text-xs font-bold uppercase tracking-widest">Properties Sold This Year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
