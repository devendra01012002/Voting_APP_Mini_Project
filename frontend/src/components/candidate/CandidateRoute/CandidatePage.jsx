// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import './CandidatePage.css'

import { NavLink } from "react-router-dom";

const CandidatePage = () => {
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
      <div className="candidate__sec">
        <div className="List_section">
          <h1>Candidates</h1>

          <div>
            {candidate.map((candidate) => (
              <div className="details" key={candidate.id}>
                <div className="election_symbol">
                  <img src={candidate.partyImage} alt="default" />
                </div>
                <div className="party_name">
                  <h3>
                    <span>Name:-</span> {candidate.name}
                  </h3>
                  <p>
                    <span>Party:-</span> {candidate.party}
                  </p>
                </div>
                <div className="poll">
                  {!isAdmin ? (
                    <NavLink to="/">Polling</NavLink>
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidatePage;
