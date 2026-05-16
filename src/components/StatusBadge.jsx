import React from 'react'

export default function StatusBadge({ status }){
  let color = 'gray';
  let text = '';
  switch(status){
    case 'available': color = 'var(--color-available)'; text = 'Disponible'; break;
    case 'occupied': color = 'var(--color-in-use)'; text = 'Ocupado'; break;
    case 'in-use': color = 'var(--color-in-use)'; text = 'En uso'; break;
    case 'completed': color = '#9E9E9E'; text = 'FINALIZADO CORRECTAMENTE'; break;
    default: color = '#9E9E9E'; text = status;
  }
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:8}}>
      <span style={{width:10,height:10,background:color,borderRadius:999}}></span>
      <small style={{fontSize:'12px'}}>{text}</small>
    </span>
  )
}
