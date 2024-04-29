import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./C2.css";

function CandidatePage2() {
    const [candidate, setcandidate] = useState([]);
    const [isAdmin, setisAdmin] = useState(false);
    useEffect(() => {
        const fetchCandidates = async () => {
          try {
            const response = await axios.get("http://localhost:8080/candidate");
            console.log(response.data);
            setcandidate(response.data);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchCandidates();
    
        // Cleanup function (optional)
        return () => {
          // Perform any cleanup if necessary
        };
      }, []);
    
  return (
    <>
    <div className="main-title">
    <h1>
        All Candidates
    </h1>
    </div>
    <div className='main-card1'>
    {candidate.map((candidate) => (
    <div className='d11'>
        <section  key={candidate.id} className='Vote-count1' >Candidate {candidate.count} </section>
        <div className='d21'>
           <section className="image1"><img src={candidate.partyImage} alt="" srcset="" /></section>
           <section className="detail1">
               <h4 className="name1">Name: {candidate.name}</h4>
               <h4 className="party1">Party: {candidate.party}</h4>
           </section>
           
           <div className="poll">
                  {!isAdmin ? (
                    <NavLink to="/">Vote</NavLink>
                  ) : (
                    <div>
                      <div className="edit">
                        <NavLink to="/">Edit</NavLink>
                      </div>
                      <div className="delete">
                        <button>Delete</button>
                      </div>
                    </div>
                  )}
                </div>
           </div>
    </div>
     ))}
     </div>
    </>
  )
}

export default CandidatePage2;
