import React from 'react'
import { Layout } from './layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConciergePage } from './pages/ConciergePage'
import { HomePage } from './pages/HomePage'
import { NewsPage } from './pages/NewsPage'
import { HomeLoanPage } from './pages/HomeLoanPage'
import { TestimonialPage } from './pages/TestimonialPage'


import { Careers } from './pages/about/Careers'
import { Contact } from './pages/about/Contact'
import { Welcome } from './pages/about/Welcome'
import { OurTeam } from './pages/about/OurTeam'

import { PropertiesForSell } from './pages/properties/PropertiesForSell'
import { PropertiesForRent } from './pages/properties/PropertiesForRent'

import { WhyWithUs } from './pages/sell/WhyWithUs'
import { Testimonials } from './pages/sell/Testimonials'
import { RecentSales } from './pages/sell/RecentSales'


import { NotFoundPage } from './pages/NotFoundPage'


import { AdminLayout } from './layout/AdminLayout'
import { AdminLogin } from './pages/admin/AdminLogin'
import { AdminDashboard } from './pages/admin/AdminDashboard'
import { AddPropertyRent } from './pages/admin/AddPropertyRent'
import { AddPropertySell } from './pages/admin/AddPropertySell'
import { ProtectedAdminRoute } from './utils/ProtectedAdminRoute'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="concierge" element={<ConciergePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="home-loans" element={<HomeLoanPage />} />
          <Route path="testimonials" element={<TestimonialPage />} />



          <Route path="about" element={<Welcome />} />
          <Route path="about/welcome" element={<Welcome />} />
          <Route path="about/our-team" element={<OurTeam />} />
          <Route path="about/careers" element={<Careers />} />
          <Route path="about/contact" element={<Contact />} />


          <Route path="buy/residential" element={<PropertiesForSell />} />
          <Route path="rent/residential" element={<PropertiesForRent />} />

          <Route path="/sell/why-sell-with-us" element={<WhyWithUs />} />
          <Route path="/sell/testimonials" element={<Testimonials />} />
          <Route path="/sell/recent-sales" element={<RecentSales />} />



        </Route>

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="add-rent" element={<AddPropertyRent />} />
          <Route path="add-sell" element={<AddPropertySell />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App