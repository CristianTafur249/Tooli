import React from 'react'

// Componente auxiliar para renderizar opciones de pregunta (checkbox pills)
export default function QuizQuestion({ title, options = [], selected = [], onToggle }){
  return (
    <div>
      <h3>{title}</h3>
      <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
        {options.map((opt, i) => {
          const active = selected.includes(opt)
          return (
            <button key={i} onClick={() => onToggle(opt)} className="btn" style={{background: active ? 'var(--color-accent)' : 'transparent', color: active ? 'white' : 'black', border: '1px solid var(--color-accent-light)', padding:'8px 12px', borderRadius:999}}>{opt}</button>
          )
        })}
      </div>
    </div>
  )
}
