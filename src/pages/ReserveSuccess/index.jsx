import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ReserveSuccess(){
  const navigate = useNavigate()
  return (
    <div className="app-page" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'80vh'}}>
      <small>*Máximo 2 horas de uso*</small>
      <div className="card" style={{textAlign:'center',marginTop:12}}>
        <h2>Tu proceso se ha realizado con éxito</h2>
        <div style={{fontSize:48,color:'var(--color-available)'}}>✔️</div>
        <div style={{marginTop:12}}>
          <button className="btn btn-reserve" onClick={() => navigate('/profile')}>Ocupar la herramienta</button>
        </div>
      </div>
    </div>
  )
}
