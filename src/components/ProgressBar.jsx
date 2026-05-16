import React from 'react'

export default function ProgressBar({ currentStep = 1, totalSteps = 3, theme = 'dark' }) {
  const percent = Math.round((currentStep / totalSteps) * 100)
  const isDark = theme === 'dark'

  return (
    <div className="progress-bar-container">
      <div className={`progress-bar-outer ${isDark ? 'dark-theme' : 'light-theme'}`}>
        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>
      <div className={`progress-text ${isDark ? 'dark-theme' : 'light-theme'}`}>
        Pregunta {currentStep} de {totalSteps}
      </div>
    </div>
  )
}
