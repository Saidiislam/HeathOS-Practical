import React from 'react'
import Navbar from '../Navbar/Navbar'

const Structure = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}

export default Structure