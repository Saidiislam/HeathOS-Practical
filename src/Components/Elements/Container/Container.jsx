import React from 'react'
import './Container.css'

export const Container = ({children}) => {
  return (
    <div className="container sm">{children}</div>
  )
}

