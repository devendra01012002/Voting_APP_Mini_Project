// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import "./VotingResult.css";

const VoteingResult = () => {
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
    <div className="result_diclare">
      <h1>Online Result of the Polling</h1>
      <div className="Result">
        {votingResult.map((candidate) => (
          <div className="result_box" key={candidate.id}>
            <div className="win_image">
              <img src={candidate.partyImage} alt="default" />
            </div>
            <div className="detail_box"> <div>
                <h4>Party: {candidate.party}</h4>
              </div>
            </div>
            <p>Total Vote:{candidate.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteingResult;
