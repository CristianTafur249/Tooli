import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import ToolCard from '../../components/ToolCard'
import { tools } from '../../data/tools'

export default function Home() {
  const navigate = useNavigate()
  const currentUser = { name: 'Luis' }

  return (
    <div className="home-page">
      {/* ── USER PROFILE CARD ── */}
      <div className="user-header-card">
        <img
          className="user-avatar-img"
          src="/assets/IMG_1486.PNG"
          alt="Avatar"
        />
        <div className="user-greeting">Hola, {currentUser.name}</div>
      </div>

      {/* ── SEARCH BAR ── */}
      <div className="home-search-wrapper">
        <span className="question-mark-left">¿</span>
        <input
          type="text"
          className="home-search-pill"
          placeholder="Qué herramienta necesitas"
          readOnly
          onClick={() => navigate('/search')}
        />
        <span className="question-mark-right">?</span>
      </div>

      {/* ── SECTION: LAS MÁS USADAS ── */}
      <h2 className="home-section-title">Las más usadas</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {tools.slice(0, 3).map(t => (
          <ToolCard key={t.id} tool={t} variant="list" />
        ))}
      </div>

      {/* ── BOTTOM NAVIGATION ── */}
      <NavBar activeTab="home" theme="white" />
    </div>
  )
}
