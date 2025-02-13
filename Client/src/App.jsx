import React, { useState } from 'react'
import './App.css'
import Home from './Components/Users/Home'
import ContactUs from './Components/Users/ContactUs'
import AdminLogin from './Components/Admin/AdminLogin'
import AdminDashboard from './Components/Admin/AdminDashboard'
import AdminChangePass from './Components/Admin/AdminChangePass'
import { Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLogin />} />
      <Route element={<PrivateRoute />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/change-password" element={<AdminChangePass />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App
