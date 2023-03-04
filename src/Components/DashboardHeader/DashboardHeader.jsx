import React from 'react'

export const DashboardHeader = ({name}) => {
  return (
    <div className='dashboard-header'>
        <h2>Welcome {name}</h2> 
        <select>
            <option value="Today">Today</option>
            <option value="nextDay">nextDay</option>
        </select>
    </div>
  )
}
