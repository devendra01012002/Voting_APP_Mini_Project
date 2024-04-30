// import React from "react";
import PullingPage from "./PullingPage";
import StartVoting from "../StartVoting/StartVoting";
import "./Home.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ElectionPage from "../ElectionsList/ElectionPage";
import ScrollImageSect from "../ElectionsList/ScrollImageSect";
import { useEffect, useState } from "react";
import Digital from "../partials/Digital";
import EveryoneCard from "../partials/EveryoneCard";
import EditPassword from "../Profile/EditPassword";
// import MainFooter from "../partials/MainFooter";

const Home = () => {

  const [message, setmessage] = useState("");

  const clickHandler = () => {
    localStorage.setItem("message", "");
  };

  function add() {
    setmessage(localStorage.getItem("message"));
  }

  useEffect(() => {
    add();
  }, []);

  return (
    <>
      <ToastContainer/>
      <div className=" mx-auto">
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
      <StartVoting />
      <EveryoneCard/>
      <Digital/>
      <ElectionPage />
      <PullingPage />
      <ScrollImageSect />
      {/* <EditPassword/> */}
    </>
  );
};

export default Home;
