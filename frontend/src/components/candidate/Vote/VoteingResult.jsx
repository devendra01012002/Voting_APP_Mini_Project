// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

const VoteingResult = () => {

    const [votingResult, setVoteResult] = useState([]);

    useEffect(() => {
      const fetchCandidates = async () => {
        try {
          const response = await axios.get("http://localhost:8080/candidate/result");
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
    <div>
      <h1>VoteResult</h1>
      <div>
        {votingResult.map((candidate) => (
          <div key={candidate.id}>
                <div>Party: {candidate.party}</div>
                <div>Count:{candidate.count }</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VoteingResult
