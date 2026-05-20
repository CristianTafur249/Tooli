import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { tools } from '../../data/tools'
import ProgressBar from '../../components/ProgressBar'
import NavBar from '../../components/NavBar'

export default function Quiz() {
  const { id } = useParams()
  const navigate = useNavigate()
  const tool = tools.find(t => String(t.id) === String(id))
  
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({ q1: [], q2: [], q3: [] })

  // Modal feedback state
  const [modal, setModal] = useState({
    isOpen: false,
    status: 'success', // 'success' or 'error'
    scoreText: '',
  })

  if (!tool) {
    return <div className="quiz-page-dark">Herramienta no encontrada</div>
  }

  // Handle option toggles
  function toggleAnswer(qKey, option) {
    setAnswers(prev => {
      const list = prev[qKey]
      if (list.includes(option)) {
        return { ...prev, [qKey]: list.filter(x => x !== option) }
      }
      return { ...prev, [qKey]: [...list, option] }
    })
  }

  // Validate current step answers and open feedback modal
  function validateAnswers() {
    let correctList = []
    let userSelections = []

    if (step === 1) {
      correctList = tool.quizAnswers.q1_correct || []
      userSelections = answers.q1
    } else if (step === 2) {
      correctList = tool.quizAnswers.q2_correct || []
      userSelections = answers.q2
    } else if (step === 3) {
      correctList = tool.quizAnswers.q3_correct || []
      userSelections = answers.q3
    }

    // Number of correct answers selected by the user
    const correctSelected = userSelections.filter(opt => correctList.includes(opt)).length
    const totalCorrect = correctList.length

    // User is successful only if they selected all correct options and no incorrect options
    const isSuccessful = (correctSelected === totalCorrect) && (userSelections.length === totalCorrect)

    setModal({
      isOpen: true,
      status: isSuccessful ? 'success' : 'error',
      scoreText: `${correctSelected}/${totalCorrect} respuestas correctas`,
    })
  }

  // Close modal and take action (Continue, retry, or finish)
  function handleModalAction() {
    const wasSuccess = modal.status === 'success'
    setModal(prev => ({ ...prev, isOpen: false }))

    if (wasSuccess) {
      if (step === 1) {
        setStep(2)
      } else if (step === 2) {
        setStep(3)
      } else if (step === 3) {
        navigate(`/tool/${tool.id}/reserve`)
      }
    } else {
      // Failure resets current step answers
      setAnswers(prev => ({
        ...prev,
        [step === 1 ? 'q1' : step === 2 ? 'q2' : 'q3']: []
      }))
    }
  }

  // Show Hint popup
  function showHint(stepNum) {
    let message = ''
    if (stepNum === 1) {
      message = `Pista para Errores: Observa la pulidora con el protector retirado o si el disco muestra fisuras o desgaste.`
    } else if (stepNum === 2) {
      message = `Pista para Implementos: Recuerda proteger siempre ojos, manos y vías respiratorias al pulir metal.`
    } else {
      message = `Pista para Materiales: Los discos de corte estándar son ideales para materiales duros como metal, piedra o cerámica.`
    }
    alert(message)
  }

  const isStep2 = step === 2
  const currentPageClass = isStep2 ? 'quiz-page-light' : 'quiz-page-dark'
  const progressTheme = isStep2 ? 'light' : 'dark'
  const navTheme = isStep2 ? 'blue' : 'white'

  return (
    <div className={currentPageClass}>
      {/* ── HEADER: BACK BUTTON & PROGRESS BAR ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '8px' }}>
        <button
          className="btn-back-circle"
          onClick={() => {
            if (step > 1) {
              setStep(step - 1)
            } else {
              navigate(-1)
            }
          }}
          aria-label="Volver"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
        
        <div style={{ flex: 1 }}>
          <ProgressBar currentStep={step} totalSteps={3} theme={progressTheme} />
        </div>
      </div>

      {/* ── QUESTION 1: ARRASTRAR AL RECTÁNGULO (DARK THEME) ── */}
      {step === 1 && (
        <div>
          <h2 className="quiz-title" style={{ color: '#ffffff' }}>Arrastrar al rectangulo:</h2>
          
          <div className="quiz-split-layout">
            <div className="quiz-left-col">
              <div className="incorrect-use-box">
                <img src={tool.image} alt={tool.name} />
              </div>
            </div>
            
            <div className="quiz-right-col" style={{ flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
              <div className="quiz-info-text" style={{ color: '#C5D6F9' }}>
                Los errores mas comunes al usar la {tool.name.toLowerCase()} son:
              </div>
              <button className="btn-pista" onClick={() => showHint(1)}>
                Pista
              </button>
            </div>
          </div>

          {/* Clickable Drop Zone (Rectangle) */}
          <div className="drop-zone">
            {answers.q1.length === 0 ? (
              <span className="drop-zone-placeholder">Selecciona las opciones correctas de abajo</span>
            ) : (
              answers.q1.map((opt, i) => (
                <button
                  key={i}
                  className="quiz-option-pill selected"
                  onClick={() => toggleAnswer('q1', opt)}
                >
                  {opt}
                </button>
              ))
            )}
          </div>

          {/* Option list container */}
          <div className="quiz-options-container">
            {tool.commonErrors
              .filter(opt => !answers.q1.includes(opt))
              .map((opt, i) => (
                <button
                  key={i}
                  className="quiz-option-pill"
                  onClick={() => toggleAnswer('q1', opt)}
                >
                  {opt}
                </button>
              ))}
          </div>

          <button
            className="btn-quiz-action dark-theme"
            disabled={answers.q1.length === 0}
            onClick={validateAnswers}
          >
            Continuar
          </button>
        </div>
      )}

      {/* ── QUESTION 2: SELECCIONA IMPLEMENTOS (LIGHT THEME) ── */}
      {step === 2 && (
        <div>
          <h2 className="quiz-title" style={{ color: '#0D1F5C' }}>Selecciona:</h2>

          <div className="quiz-split-layout" style={{ alignItems: 'flex-start' }}>
            <div className="quiz-left-col">
              <div className="quiz-info-text" style={{ color: '#0D1F5C' }}>
                Los implementos de seguridad que se deben usar son:
              </div>
              
              <button className="btn-pista" onClick={() => showHint(2)}>
                Pista
              </button>

              {/* Options list vertically stacked */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                {tool.safetyItems.map((opt, i) => {
                  const isSelected = answers.q2.includes(opt)
                  return (
                    <button
                      key={i}
                      className={`quiz-option-pill ${isSelected ? 'selected' : ''}`}
                      onClick={() => toggleAnswer('q2', opt)}
                      style={{ textAlign: 'left', width: '100%' }}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right side: Avatar in vertical frame */}
            <div className="quiz-right-col">
              <div className="quiz-avatar-vertical-frame">
                <img src="/assets/IMG_1488.PNG" alt="Student wearing overalls" />
              </div>
            </div>
          </div>

          <button
            className="btn-quiz-action light-theme"
            disabled={answers.q2.length === 0}
            onClick={validateAnswers}
            style={{ marginTop: '16px' }}
          >
            Continuar
          </button>
        </div>
      )}

      {/* ── QUESTION 3: SELECCIONA MATERIALES (DARK THEME) ── */}
      {step === 3 && (
        <div>
          <h2 className="quiz-title" style={{ color: '#ffffff' }}>Selecciona:</h2>

          <div className="quiz-split-layout">
            <div className="quiz-left-col" style={{ flex: 1 }}>
              <div className="quiz-info-text" style={{ color: '#C5D6F9' }}>
                La {tool.name.toLowerCase()} se puede usar con los siguientes materiales
              </div>
              <button className="btn-pista" onClick={() => showHint(3)}>
                Pista
              </button>
            </div>

            {/* Right side: Tool image in square frame */}
            <div className="quiz-right-col">
              <div className="quiz-tool-square-frame">
                <img src={tool.image} alt={tool.name} />
              </div>
            </div>
          </div>

          {/* Options grid in 2 columns */}
          <div className="quiz-options-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {tool.materials.map((opt, i) => {
              const isSelected = answers.q3.includes(opt)
              return (
                <button
                  key={i}
                  className={`quiz-option-pill ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleAnswer('q3', opt)}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  {opt}
                </button>
              )
            })}
          </div>

          <button
            className="btn-quiz-action dark-theme"
            disabled={answers.q3.length === 0}
            onClick={validateAnswers}
            style={{ marginTop: '16px' }}
          >
            Finalizar Cuestionario
          </button>
        </div>
      )}

      {/* ── INTERACTIVE FEEDBACK MODAL ── */}
      {modal.isOpen && (
        <div className="modal-overlay">
          <div className="quiz-modal-card">
            {modal.status === 'success' ? (
              <>
                <div className="modal-icon-circle success">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="modal-score-text">{modal.scoreText}</div>
                <button className="btn-modal-action success" onClick={handleModalAction}>
                  {step === 3 ? 'Ocupar la herramienta' : 'Continuar'}
                </button>
              </>
            ) : (
              <>
                <div className="modal-icon-circle error">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="modal-score-text">{modal.scoreText}</div>
                <button className="btn-modal-action error" onClick={handleModalAction}>
                  Reintentar ⚠️
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── BOTTOM NAVIGATION ── */}
      <NavBar activeTab="home" theme={navTheme} />
    </div>
  )
}
