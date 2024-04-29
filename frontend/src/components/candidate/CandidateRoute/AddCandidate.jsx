import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";

import './AddCandidate.css'
const AddCandidate = () => {
  // State variables to store input values
  const [name, setName] = useState("");
  const [party, setParty] = useState("");
  const [age, setAge] = useState("");
  const [partyImage, setPartyImage] = useState("");
  let navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare candidate data to be sent
    const candidateData = {
      name: name,
      party: party,
      age: age,
      partyImage: partyImage,
    };

    try {
      // Send POST request using Axios
      const response = await axios.post(
        "http://localhost:8080/candidate",
        candidateData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      );

      // Handle response if needed
      console.log("Candidate added successfully:", response.data);
      console.log(candidateData);

      // Clear input fields after submission
      setName("");
      setParty("");
      setAge("");
      setPartyImage("");
      navigate("/candidate");
    } catch (error) {
      // Handle error if request fails
      console.error("Error adding candidate:", error);
    }
  };

  return (
    <div className="Candidate_page">
      <div className="extra_info">
        <div className="people_logo">
          <MdPeopleAlt />
        </div>
        <div className="text_info">
          Ensure compliance with electoral regulations and verify candidate
          eligibility before adding them for election candidacy.
        </div>
      </div>
      <div className="candidate_box">
        <h2>Add Candidate</h2>
        <form onSubmit={handleSubmit}>
          <label className="candidate_field">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label className="candidate_field">
            Party:
            <input
              type="text"
              value={party}
              onChange={(e) => setParty(e.target.value)}
              required
            />
          </label>
          <br />
          <label className="candidate_field">
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
          <br />
          <label className="candidate_field">
            Party Image URL:
            <input
              type="text"
              value={partyImage}
              onChange={(e) => setPartyImage(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Add Candidate</button>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;
