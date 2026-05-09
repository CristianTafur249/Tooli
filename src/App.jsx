import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Splash from './pages/Splash/index'
import Login from './pages/Login/index'
import Home from './pages/Home/index'
import Search from './pages/Search/index'
import ToolDetail from './pages/ToolDetail/index'
import Quiz from './pages/Quiz/index'
import Reserve from './pages/Reserve/index'
import ReserveSuccess from './pages/ReserveSuccess/index'
import Profile from './pages/Profile/index'
import ReportDamage from './pages/ReportDamage/index'
import ReportSuccess from './pages/ReportSuccess/index'

export default function App(){
  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<Navigate to="/splash" replace />} />
        <Route path="/splash" element={<Splash/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/tool/:id" element={<ToolDetail/>} />
        <Route path="/tool/:id/quiz" element={<Quiz/>} />
        <Route path="/tool/:id/reserve" element={<Reserve/>} />
        <Route path="/tool/:id/reserve/success" element={<ReserveSuccess/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/report/:id" element={<ReportDamage/>} />
        <Route path="/report/:id/success" element={<ReportSuccess/>} />
        <Route path="*" element={<Navigate to="/splash" replace />} />
      </Routes>
    </div>
  )
}
