import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBanner } from '../components/TopBanner';

export const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarType, setSidebarType] = useState('buy');

    const handleOpenSidebar = (type) => {
        setSidebarType(type);
        setIsSidebarOpen(true);
    };


    return (



        <div className="min-h-screen bg-white font-sans text-raywhite-dark overflow-x-hidden">
            <Navbar onOpenSidebar={handleOpenSidebar} />
            <TopBanner/>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} content={sidebarType} />
           <Outlet/>
            <Footer />
        </div>
    );

}
