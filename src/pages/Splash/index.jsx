import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Splash.css'

export default function Splash() {
  const navigate = useNavigate()

  // Prevent double-tap zoom on mobile devices (matching Toli2 index.html behavior)
  React.useEffect(() => {
    let lastTouchEnd = 0
    const handleTouchEnd = (e) => {
      const now = Date.now()
      if (now - lastTouchEnd <= 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    }
    document.addEventListener('touchend', handleTouchEnd, { passive: false })
    return () => {
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <div className="splash-phone">
      {/* Background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="beam"></div>

      {/* ── LOGO ── */}
      <div className="logo-area">
        {/* Floating tools forming the word "Tooli" */}
        <div style={{ position: 'relative', width: '280px', height: '110px' }}>
          {/* Hammer = T */}
          <img
            className="tool-icon tool-hammer"
            style={{ left: '-12px', top: '12px', width: '78px' }}
            src="/assets/tools/Hammer_3D.png"
            alt="Hammer"
          />

          {/* Sprocket = o */}
          <img
            className="tool-icon tool-sprocket1"
            style={{ left: '54px', top: '28px', width: '52px' }}
            src="/assets/tools/sprocket_3D.png"
            alt="Sprocket"
          />

          {/* Segunda o */}
          <img
            className="tool-icon tool-sprocket2"
            style={{ left: '106px', top: '28px', width: '52px' }}
            src="/assets/tools/sprocket_3D.png"
            alt="O"
          />

          {/* Saw = l */}
          <img
            className="tool-icon tool-saw"
            style={{
              left: '154px',
              top: '12px',
              height: '64px',
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
              left: '206px',
              top: '16px',
              width: '52px',
              height: '58px',
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

      {/* ── CONTENT ── */}
      <div className="content">
        <h1 className="welcome">¡Bienvenido!</h1>

        <button className="btn-start" onClick={() => navigate('/login')}>
          Iniciar
        </button>

        <p className="register-row">
          ¿Aún no tienes una cuenta? <a href="#">Registrarse</a>
        </p>
      </div>

      {/* ── BOTTOM TOOL STRIP ── */}
      <div className="tools-strip">
        {/* Pliers */}
        <img
          className="strip-tool tool-pliers"
          width="52"
          height="90"
          src="/assets/tools/nose pliers_3D.png"
          alt="Pliers"
        />

        {/* Caliper */}
        <img
          className="strip-tool tool-caliper"
          width="44"
          height="95"
          src="/assets/tools/caliper_3D.png"
          alt="Caliper"
        />

        {/* Wrench */}
        <img
          className="strip-tool tool-wrench"
          width="58"
          height="95"
          src="/assets/tools/Adjustable_3D.png"
          alt="Wrench"
        />

        {/* C-Clamp */}
        <img
          className="strip-tool tool-clamp"
          width="62"
          height="100"
          src="/assets/tools/clamp_3D.png"
          alt="C-Clamp"
        />

        {/* Power Drill */}
        <img
          className="strip-tool tool-drill"
          width="68"
          height="90"
          src="/assets/tools/Angle grinder_3D.png"
          alt="Power Drill"
        />

        {/* Handsaw */}
        <img
          className="strip-tool tool-handsaw"
          width="50"
          height="95"
          src="/assets/tools/SawThree_3D.png"
          alt="Handsaw"
        />
      </div>
    </div>
  )
}
