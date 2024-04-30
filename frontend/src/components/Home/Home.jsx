// import React from "react";
import PullingPage from "./PullingPage";
import StartVoting from "../StartVoting/StartVoting";
import "./Home.css";
import ElectionPage from "../ElectionsList/ElectionPage";
import ScrollImageSect from "../ElectionsList/ScrollImageSect";
import { useEffect, useState } from "react";
import Digital from "../partials/Digital";
import EveryoneCard from "../partials/EveryoneCard";
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
      <StartVoting />
      <EveryoneCard/>
      <Digital/>
      <ElectionPage />
      <PullingPage />
      <ScrollImageSect />

    </>
  );
};

export default Home;
