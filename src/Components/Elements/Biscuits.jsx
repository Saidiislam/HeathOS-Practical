import React from 'react'

const Biscuits = ({title, count}) => {
  return (
    <div className='rounded-lg bg-white p-3 leading-8'>
        <p className='text-xs text-slate-500 drop-shadow-md		'>{title}</p>
        <h2>{count}</h2>
    </div>
  )
}

export default Biscuits