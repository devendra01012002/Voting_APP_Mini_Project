// import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartVoting.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const StartVoting = () => {
  let navigate = useNavigate();
 
  const GetStartHandler = () => {
    navigate("/candidate");
  }

  

  return (
    <>
      <ToastContainer/>
      <div className="voting_section">
        <div className="voting_online">
          <h1 className="text-info">Online VOTE</h1>
          <p>
            A vote is like a rifle: its usefulness depends upon the character of
            the user.
          </p>
          <button
            onClick={() => {
              GetStartHandler();
            }}
          >
            Get Started{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default StartVoting;
