import React from 'react'

export const Warning = ({title}) => {
  return (
    <div className='border p-2 rounded bg-slate-100 drop-shadow-sm'>
        <h6>{`wow you have no ${title}! 🥱`}</h6>
    </div>
  )
}

export default Warning