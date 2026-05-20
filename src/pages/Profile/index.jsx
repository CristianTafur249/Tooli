import React from 'react'
import NavBar from '../../components/NavBar'
import ToolCard from '../../components/ToolCard'
import { userProfile } from '../../data/tools'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div className="profile-page">
      {/* ── BACK BUTTON ── */}
      <button className="btn-back-circle" onClick={() => navigate(-1)} aria-label="Volver">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      </button>

      {/* ── GRADIENT HEADER CARD WITH AVATAR ── */}
      <div className="profile-header-card">
        <img
          className="profile-avatar-img"
          src="/assets/IMG_1486.PNG"
          alt="Avatar"
        />
        <div className="profile-greeting-text">
          ¡Hola {userProfile.name}, Bienvenido!
        </div>
      </div>

      {/* ── USAGE HISTORY SECTION ── */}
      <h3 className="profile-section-title">Historial de usos:</h3>
      
      <div style={{ marginTop: '8px' }}>
        <div style={{ marginBottom: '16px' }}>
          <ToolCard tool={userProfile.currentTool} variant="list" />
        </div>

        <div>
          <h4 className="profile-history-subtitle">La semana pasada</h4>
          {userProfile.history.map(h => (
            <div key={h.id} style={{ marginBottom: '12px' }}>
              <ToolCard tool={h} variant="list" />
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM NAVIGATION ── */}
      <NavBar activeTab="profile" theme="white" />
    </div>
  )
}
