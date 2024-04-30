import React from 'react'
import './Digital.css'
import { useNavigate } from 'react-router-dom'


function Digital() {
    const navigate=useNavigate();
    const handleClick = () =>{
     navigate('user/login');
  }
  return (  
    <div className='digital-div'>
       <h1 className='digital-text'>Tap your way into digitizing democracy</h1>
       <button className="digital-btn" onClick={handleClick}>Get Started for free</button>
    </div>
  )
}

export default Digital
