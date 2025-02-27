import React, { useState } from 'react'
import './App.css'
import Home from './Components/Users/Home'
import AdminDashboard from './Components/Admin/AdminDashboard'
import AdminLogin from './Components/Admin/AdminLogin'
import PrivateRoute from './Components/PrivateRoute'
import { Route, Routes } from 'react-router-dom'
import AdminChangePass from './Components/Admin/AdminChangePass'
import ContactUs from './Components/Users/ContactUs'
import About from './Components/Users/About'
import Business from './Components/Users/Business'
import Careers from './Components/Users/Careers'
// import Careers from './Components/Users/Careers'

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLogin />} />
      <Route element={<PrivateRoute />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/change-password" element={<AdminChangePass />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
      <Route path="/business" element={<Business />} />
      {/* <Route path="/career" element={<Careers />} /> */}
    </Routes>
  );
}

export default App
