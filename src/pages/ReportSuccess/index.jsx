import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ReportSuccess(){
  const navigate = useNavigate()
  return (
    <div className="app-page" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'80vh'}}>
      <div className="card" style={{textAlign:'center'}}>
        <div style={{fontSize:72,color:'var(--color-btn-report)'}}>⚠️</div>
        <h2>El daño ha sido reportado</h2>
        <p>Gracias Luis, por avisarnos.</p>
        <div style={{marginTop:12}}>
          <button className="btn" style={{border:'1px solid var(--color-btn-primary)'}} onClick={()=>navigate('/profile')}>Volver al perfil</button>
        </div>
      </div>
    </div>
  )
}
