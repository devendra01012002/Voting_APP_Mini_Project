import React from 'react'
import './EveryoneCard.css'
import { FaSchoolFlag } from "react-icons/fa6";

function EveryoneCard() {
  return (
    <div className='everyone-main'>
      <div className='everyone-heading'>
        <h1>E-vote is made for Everyone</h1>
      </div>
      <div className='everyone-l1'>
         <h3>* Associations</h3>
         <h3>* Government</h3>
      </div>
      <div className='everyone-l2'>
        <h3>
          * Educational Institutions</h3>
        <h3>* International bodies</h3>
        <h3></h3>
      </div>
    </div>
  )
}

export default EveryoneCard
