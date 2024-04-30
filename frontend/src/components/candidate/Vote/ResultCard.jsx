// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import "./ResultCard.css";
import { useNavigate } from "react-router-dom";

function ResultCard() {
  const [votingResult, setVoteResult] = useState([]);
  const navigate = useNavigate();
    useEffect(() => {
      const fetchCandidates = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8080/candidate/result",
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          console.log(response.data);
          setVoteResult(response.data);
        } catch (err) {
          localStorage.setItem("message", err.response.data.error);
          navigate("/user/login");
        }
      };

      fetchCandidates();

     
      // eslint-disable-next-line
    }, []);
  return (
    <>
      <div className="main-title">
        <h1>
          Adjourned Poll Election to Assembly Constituency:{" "}
          <span>Trends & Results Jan 2024</span>
        </h1>
      </div>
      <div className="main-card">
        {votingResult.map((candidate) => (
          <div className="d1" key={candidate.id}>
            
            <section className="Vote-count">
              Vote Count {candidate.count}{" "}
            </section>
            <div className="d2">
              <section className="image">
                <img src={candidate.partyImage} alt="" />
              </section>
              <section className="detail">
                <h4 className="name">{candidate.name}</h4>
                <h4 className="party"> {candidate.party}</h4>
              </section>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="main-title">
    <h1>
    Adjourned Poll Election to Assembly Constituency: <span>Trends & Results Jan 2024</span>
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
     </div> */}
    </>
  );
}

export default ResultCard
