import React from 'react'
import Header from '../../components/header/Header'
import './success.css'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const refresh = useNavigate()
  return (
    <>
      <Header />
      <div className="container font_Size success_container">
        Transaction successful and order placed...
      </div>
      <div className='font_Size success_btn'>
        <button onClick={() => refresh("/")}>Continue Shopping</button>
      </div>
    </>
  )
}

export default Success