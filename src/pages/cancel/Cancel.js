import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import './cancel.css'

const Cancel = () => {
    const refresh = useNavigate()
  return (
    <>
      <Header />
      <div className="container font_Size cancel_container">
        Transaction unsuccessful and order not placed...
      </div>
      <div className='font_Size cancel_btn'>
        <button onClick={()=>refresh('/')}>Continue Shopping</button>
      </div>
    </>
  )
}

export default Cancel