import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import BackButton from '../../components/BackButton'

export default function ReportDamage(){
  const { id } = useParams()
  const navigate = useNavigate()
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState(null)

  return (
    <div className="app-page">
      <BackButton />
      <div className="card" style={{marginTop:12}}>
        <h3>REPORTAR DAÑO</h3>
        <label>• Inserte descripción:</label>
        <textarea rows={5} value={desc} onChange={e=>setDesc(e.target.value)} style={{width:'100%',padding:8,borderRadius:8}} />

        <label style={{marginTop:8}}>• Inserte evidencia:</label>
        <div style={{marginTop:8}}>
          <input type="file" accept="image/*" capture="environment" onChange={e=>setFile(e.target.files[0])} />
          {file && <div style={{marginTop:8}}><img src={URL.createObjectURL(file)} alt="thumb" style={{width:120}} /></div>}
        </div>

        <div style={{marginTop:12}}>
          <button className="btn" style={{background:'var(--color-btn-report)'}} disabled={!desc} onClick={()=>navigate(`/report/${id}/success`)}>REPORTAR</button>
        </div>
      </div>
    </div>
  )
}
