import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ToolCard({ tool, variant = 'list' }) {
  const navigate = useNavigate()

  if (variant === 'grid') {
    return (
      <div className="grid-tool-card" onClick={() => navigate(`/tool/${tool.id}`)}>
        <div className="grid-card-top">
          <img src={tool.image} alt={tool.name} />
        </div>
        <div className="grid-card-banner">{tool.name}</div>
      </div>
    )
  }

  const isAvailable = tool.status === 'available'

  return (
    <div className="split-tool-card" onClick={() => navigate(`/tool/${tool.id}`)}>
      {/* Left portion: Image */}
      <div className="split-card-left">
        <img src={tool.image} alt={tool.name} />
      </div>

      {/* Right portion: Information & Action */}
      <div className="split-card-right">
        <div className="split-card-header">
          <span className="split-tool-name">{tool.name}</span>
          <button
            className="btn-reserve-outline"
            onClick={e => {
              e.stopPropagation()
              navigate(`/tool/${tool.id}/reserve`)
            }}
          >
            Reservar
          </button>
        </div>

        <div className="split-tool-desc">{tool.usedFor}</div>

        <div className="split-tool-status">
          <span className={`status-dot ${isAvailable ? 'available' : 'occupied'}`}></span>
          <span className={`status-text ${isAvailable ? 'available' : 'occupied'}`}>
            {isAvailable ? 'Disponible' : 'Ocupado'}
          </span>
        </div>
      </div>
    </div>
  )
}
