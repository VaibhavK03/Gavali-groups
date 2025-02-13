import React, { useState } from 'react'
import './App.css'
import Home from './Components/Users/Home'
import AdminDashboard from './Components/Admin/AdminDashboard'
import AdminLogin from './Components/Admin/AdminLogin'
import PrivateRoute from './Components/PrivateRoute'
import { Route, Routes } from 'react-router-dom'
import AdminChangePass from './Components/Admin/AdminChangePass'

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
