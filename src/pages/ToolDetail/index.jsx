import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { tools } from '../../data/tools'
import NavBar from '../../components/NavBar'
import BackButton from '../../components/BackButton'

export default function ToolDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const tool = tools.find(t => String(t.id) === String(id))

  if (!tool) {
    return (
      <div className="tool-detail-page">
        <p>Herramienta no encontrada</p>
      </div>
    )
  }

  const isAvailable = tool.status === 'available'

  return (
    <div className="tool-detail-page">
      {/* ── HEADER: BACK BUTTON & STATUS PILL ── */}
      <div className="detail-header-wrapper">
        <BackButton />
        <div className="status-pill-banner">
          <span className={`status-dot ${isAvailable ? 'available' : 'occupied'}`} />
          <span>Estado: {isAvailable ? 'Disponible' : 'Ocupado'}</span>
        </div>
      </div>

      {/* ── TOOL TITLE ── */}
      <h2 className="tool-detail-title">{tool.name}</h2>

      {/* ── STUDENT AVATAR ── */}
      <div className="detail-avatar-container">
        <img src="/assets/IMG_1489.PNG" alt="Student" />
      </div>

      {/* ── QUIZ PROMPT CARD ── */}
      <div className="detail-card-dark">
        <h3>¿Sabes usar la {tool.name}?</h3>
        <p>Con este breve test, recibirás tips y datos clave para usar la {tool.name} de forma segura.</p>
        <p className="card-subtext">Este test lo haces solo una vez.</p>
      </div>

      {/* ── ACTION BUTTON ── */}
      <button className="btn-start-quiz" onClick={() => navigate(`/tool/${tool.id}/quiz`)}>
        ¡Iniciar Cuestionario!
      </button>

      {/* ── BOTTOM NAV BAR ── */}
      <NavBar activeTab="home" theme="white" />
    </div>
  )
}
