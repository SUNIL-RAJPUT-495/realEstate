import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminSidebar } from '../components/admin/AdminSidebar'

export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-y-auto max-h-screen">
         <Outlet />
      </main>
    </div>
  )
}
