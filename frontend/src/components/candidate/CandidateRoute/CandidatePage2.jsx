// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./C2.css";
import { ToastContainer } from "react-toastify";

function CandidatePage2() {
    const [candidate, setcandidate] = useState([]);
  const [isAdmin, setisAdmin] = useState(false);
  const [message, setmessage] = useState("");

  // let navigate = useNavigate();

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
      add();
      setisAdmin(localStorage.getItem("role"))
    }, []);
  
  const clickHandler = () => {
    localStorage.setItem("message", "");
  };

  
  function add() {
    setmessage(localStorage.getItem("message"));
  }

  const HandleClickSubmit = async (id) => {
    console.log( {id} );
    try {
      
      const response = await axios.delete(
        `http://localhost:8080/candidate/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
     window.location.reload();
    }
    catch (err) {
      console.log(err.message)
    }
    
  }

  
    
  return (
    <>
      <div className=" mt-3 mx-auto">
        {message && message.length ? (
          <div className=" alert alert-warning alert-dismissible fade show">
            <strong>{message}!</strong>
            <button
              type="button"
              onClick={clickHandler}
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="main-title">
        <h1>All Candidates</h1>
      </div>
      <div className="main-card1">
        {candidate.map((candidate) => (
          <div key={candidate._id} className="d11">
            <section className="Vote-count1">
              Candidate {candidate.count}{" "}
            </section>
            <div className="d21">
              <section className="image1">
                <img src={candidate.partyImage} alt={candidate.partyImage} />
              </section>
              <section className="detail1">
                <h4 className="name1">Name: {candidate.name}</h4>
                <h4 className="party1">Party: {candidate.party}</h4>
              </section>

              <div className="poll">
                {!isAdmin ? (
                  <NavLink to="/">Vote</NavLink>
                ) : (
                  <>
                    <div className="edit">
                      <NavLink to="/">Edit</NavLink>
                    </div>
                    <div className="delete">
                      <button
                        onClick={() => {
                          HandleClickSubmit(candidate._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default CandidatePage2;