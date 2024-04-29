import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import "./ResultCard.css";

function ResultCard() {
    const [votingResult, setVoteResult] = useState([]);
    useEffect(() => {
        const fetchCandidates = async () => {
          try {
            const response = await axios.get(
              "http://localhost:8080/candidate/result"
            );
            console.log(response.data);
            setVoteResult(response.data);
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
    Adjourned Poll Election to Assembly Constituency: Trends & Results Jan 2024
    </h1>
    </div>
    <div className='main-card'>
    {votingResult.map((candidate) => (
    <div className='d1'>
        <section  key={candidate.id} className='Vote-count' >Vote Count {candidate.count} </section>
        <div className='d2'>
           <section className="image"><img src={candidate.partyImage} alt="" srcset="" /></section>
           <section className="detail">
               <h4 className="name">Name: {candidate.name}</h4>
               <h4 className="party">Party: {candidate.party}</h4>
           </section>
       </div>
    </div>
     ))}
     </div>
    </>
  )
}

export default ResultCard
