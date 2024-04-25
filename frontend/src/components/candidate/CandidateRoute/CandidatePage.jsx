// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

const CandidatePage = () => {
  const [candidate, setcandidate] = useState([]);

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
    <div>
      <h1>Candidate Routes</h1>

      <div>
        {candidate.map((candidate) => (
          <div key={candidate.id}>
            <div>Name: {candidate.name}</div>
            <div>Party: {candidate.party}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatePage;
