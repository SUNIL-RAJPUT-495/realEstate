import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const AdminSidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const currentPath = location.pathname

    const menuItems = [
        { label: "Dashboard", path: "/admin/dashboard" },
        { label: "Add Property (Rent)", path: "/admin/add-rent" },
        { label: "Add Property (Sell)", path: "/admin/add-sell" },
        { label: "Appraisals", path: "/admin/appraisals" },
    ]

    const handleLogout = () => {
        localStorage.removeItem('rw_admin_sec_tkn')
        localStorage.removeItem('rw_admin_info')
        navigate('/admin/login', { replace: true })
    }

    return (
        <aside className="w-64 min-h-screen bg-[#363636] flex flex-col shadow-2xl z-20">
            {/* Logo/Brand */}
            <div className="p-6 bg-[#222]">
                <h2 className="text-[#ffe512] font-bold text-2xl tracking-tighter" style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}>
                    RayWhite. <span className="text-sm font-sans block text-white not-italic mt-1 uppercase tracking-widest">Admin Control</span>
                </h2>
            </div>

            {/* Menu Links */}
            <nav className="flex-1 mt-6 px-4">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => {
                        const isActive = currentPath === item.path || (currentPath === '/admin' && item.path === '/admin/dashboard')
                        return (
                            <li key={index}>
                                <Link 
                                    to={item.path} 
                                    className={`flex items-center px-4 py-3 rounded-md transition-colors font-medium text-[15px] ${isActive ? 'bg-[#ffe512] text-black shadow-sm' : 'text-gray-300 hover:bg-[#444] hover:text-white'}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Logout/Bottom */}
            <div className="p-4 border-t border-[#555]">
                <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-3 text-red-400 hover:bg-[#444] hover:text-red-300 rounded-md transition-colors text-[15px] font-medium"
                >
                    ← Logout
                </button>
            </div>
        </aside>
    )
}
