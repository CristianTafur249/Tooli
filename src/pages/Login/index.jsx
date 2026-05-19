import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [pass, setPass] = useState('')
  const [show, setShow] = useState(false)

  return (
    <div className="login-page">
      {/* ── HEADER WITH HANGING TOOLS & LOGO ── */}
      <div className="login-header">
        {/* Hanging tools from top */}
        <div className="hanging-tools">
          <img
            className="hanging-tool"
            style={{ width: '40px', height: '68px', objectFit: 'contain' }}
            src="/assets/tools/nose pliers_3D.png"
            alt="Pliers"
          />
          <img
            className="hanging-tool"
            style={{ width: '34px', height: '72px', objectFit: 'contain' }}
            src="/assets/tools/caliper_3D.png"
            alt="Caliper"
          />
          <img
            className="hanging-tool"
            style={{ width: '46px', height: '72px', objectFit: 'contain' }}
            src="/assets/tools/clamp_3D.png"
            alt="Clamp"
          />
          <img
            className="hanging-tool"
            style={{ width: '48px', height: '70px', objectFit: 'contain' }}
            src="/assets/tools/Angle grinder_3D.png"
            alt="Grinder"
          />
          <img
            className="hanging-tool"
            style={{ width: '38px', height: '68px', objectFit: 'contain' }}
            src="/assets/tools/Phillips screwdriver_3D.png"
            alt="Screwdriver"
          />
        </div>

        {/* Logo in header */}
        <div className="login-logo-container">
          <div style={{ position: 'relative', width: '220px', height: '90px', transform: 'scale(0.85)' }}>
            {/* Hammer = T */}
            <img
              className="tool-icon tool-hammer"
              style={{ left: '-10px', top: '10px', width: '62px' }}
              src="/assets/tools/Hammer_3D.png"
              alt="Hammer"
            />

            {/* Sprocket = o */}
            <img
              className="tool-icon tool-sprocket1"
              style={{ left: '42px', top: '22px', width: '42px' }}
              src="/assets/tools/sprocket_3D.png"
              alt="Sprocket"
            />

            {/* Segunda o */}
            <img
              className="tool-icon tool-sprocket2"
              style={{ left: '84px', top: '22px', width: '42px' }}
              src="/assets/tools/sprocket_3D.png"
              alt="O"
            />

            {/* Saw = l */}
            <img
              className="tool-icon tool-saw"
              style={{
                left: '122px',
                top: '10px',
                height: '52px',
                width: 'auto',
                transform: 'rotate(120deg) scaleY(-1)',
                transformOrigin: 'center center'
              }}
              src="/assets/tools/Saw_3D.png"
              alt="Saw"
            />

            {/* Screwdriver = i */}
            <img
              className="tool-icon tool-screwdriver"
              style={{
                left: '164px',
                top: '14px',
                width: '42px',
                height: '46px',
                objectFit: 'cover',
                objectPosition: 'center 22%',
                transform: 'rotate(30deg)',
                transformOrigin: 'center center'
              }}
              src="/assets/tools/Phillips screwdriver_3D.png"
              alt="Screwdriver"
            />
          </div>
        </div>
      </div>

      {/* ── LOGIN FORM CONTAINER ── */}
      <div className="login-sheet">
        <h2 className="login-title">Iniciar sesión</h2>

        <div className="login-form-group">
          <div className="login-input-wrapper">
            <input
              type="text"
              placeholder="Código de estudiante"
              value={code}
              onChange={e => setCode(e.target.value)}
            />
          </div>
        </div>

        <div className="login-form-group">
          <div className="login-input-wrapper">
            <input
              type={show ? 'text' : 'password'}
              placeholder="Contraseña"
              value={pass}
              onChange={e => setPass(e.target.value)}
            />
            <button
              type="button"
              className="login-toggle-password"
              onClick={() => setShow(s => !s)}
              aria-label="Toggle password visibility"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="login-forgot-link">
          <a href="#" onClick={(e) => e.preventDefault()}>¿Olvidaste tu contraseña?</a>
        </div>

        <button className="btn-login-submit" onClick={() => navigate('/home')}>
          Ingresar
        </button>

        <button className="btn-login-biometric" onClick={(e) => e.preventDefault()}>
          Ingresar con biometría
        </button>
      </div>
    </div>
  )
}
