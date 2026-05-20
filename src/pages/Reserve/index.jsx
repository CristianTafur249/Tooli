import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { tools } from '../../data/tools'
import BackButton from '../../components/BackButton'

function formatDate(d){
  const opts = { day:'2-digit', month:'long', year:'numeric' }
  return new Date(d).toLocaleDateString('es-ES', opts)
}

export default function Reserve(){
  const { id } = useParams()
  const navigate = useNavigate()
  const tool = tools.find(t=> String(t.id)===String(id))
  const [start, setStart] = useState('00:00')
  const [end, setEnd] = useState('00:00')
  const [modalError, setModalError] = useState(false)

  if(!tool) return <div className="app-page">Herramienta no encontrada</div>

  function handleReserve(){
    if(start === end){
      setModalError(true)
      return
    }
    navigate(`/tool/${tool.id}/reserve/success`)
  }

  const hours = Array.from({length:24},(_,i)=> String(i).padStart(2,'0')+':00')

  return (
    <div className="app-page">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <BackButton />
      </div>

      <small>*Máximo 2 horas de uso*</small>
      <div className="card" style={{marginTop:12}}>
        <div style={{background:'var(--color-bg-medium)',padding:8,borderRadius:8,textAlign:'center',color:'white'}}>{formatDate(new Date())}</div>
        <div style={{marginTop:12}}>
          <label>Hora inicio:</label>
          <select value={start} onChange={e=>setStart(e.target.value)} style={{width:'100%',padding:8,borderRadius:8}}>
            {hours.map(h=> <option key={h} value={h}>{h}</option>)}
          </select>
        </div>
        <div style={{marginTop:12}}>
          <label>Hora final:</label>
          <select value={end} onChange={e=>setEnd(e.target.value)} style={{width:'100%',padding:8,borderRadius:8}}>
            {hours.map(h=> <option key={h} value={h}>{h}</option>)}
          </select>
        </div>

        <div style={{marginTop:12,display:'flex',gap:8}}>
          <button className="btn btn-reserve" style={{flex:1}} onClick={handleReserve}>Reservar herramienta</button>
          <button className="btn" style={{flex:1,border:'1px solid var(--color-btn-damage)',color:'var(--color-btn-damage)'}} onClick={()=>navigate(`/report/${tool.id}`)}>Reportar daño</button>
        </div>
      </div>

      {modalError && (
        <div style={{position:'fixed',left:0,top:0,right:0,bottom:0,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.4)'}}>
          <div className="card" style={{width:320,textAlign:'center'}}>
            <h3 style={{color:'red'}}>Primero debes seleccionar un horario</h3>
            <div style={{display:'flex',gap:8,marginTop:12}}>
              <button className="btn" style={{background:'red',color:'white',flex:1}} onClick={()=>setModalError(false)}>Volver</button>
              <button className="btn" style={{flex:1,border:'1px solid red',color:'red'}} onClick={()=>navigate(`/report/${tool.id}`)}>Reportar daño</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
