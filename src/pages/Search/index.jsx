import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { tools, recentSearches } from '../../data/tools'
import NavBar from '../../components/NavBar'
import ToolCard from '../../components/ToolCard'

export default function Search() {
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  const filtered = tools.filter(t =>
    t.name.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="search-page">
      {/* ── BACK BUTTON ── */}
      <button className="btn-back-circle" onClick={() => navigate(-1)} aria-label="Volver">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      </button>

      {/* ── PAGE TITLE ── */}
      <h2 className="search-title">Buscar herramienta</h2>

      {/* ── SEARCH INPUT BAR ── */}
      <div className="search-bar-wrapper">
        <span className="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          type="text"
          className="search-input-blue"
          placeholder="Pulidora"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        {q && (
          <button className="search-clear-btn" onClick={() => setQ('')} aria-label="Limpiar búsqueda">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* ── RECENT SEARCHES ── */}
      <div className="recent-search-title">Busqueda reciente</div>
      <div className="recent-tags-container">
        {recentSearches.map((r, i) => (
          <button key={i} className="recent-tag" onClick={() => setQ(r)}>
            {r}
          </button>
        ))}
      </div>

      {/* ── SEARCH RESULTS GRID ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {filtered.map(t => (
          <ToolCard key={t.id} tool={t} variant="grid" />
        ))}
      </div>

      {/* ── BOTTOM NAVIGATION ── */}
      <NavBar activeTab="search" theme="blue" />
    </div>
  )
}
