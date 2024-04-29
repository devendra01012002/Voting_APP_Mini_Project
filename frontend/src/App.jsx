import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import SignUpPage from './components/auth/SignUpPage'
import SignUp2 from "./components/auth/Sign2";
import LoginPage from "./components/auth/Login2";
import Navbar from "./components/partials/Navbar";
import Home from "./components/Home/Home";
import CandidatePage from "./components/candidate/CandidateRoute/CandidatePage";
import VoteingResult from "./components/candidate/Vote/VoteingResult";
import MainFooter from "./components/partials/MainFooter";
import AddCandidate from "./components/candidate/CandidateRoute/AddCandidate";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ToastContainer
       
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/">
          {/* <Route path="signup" element={<SignUpPage/>} /> */}
          <Route path="signup" element={<SignUp2 />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LoginPage />} />
        </Route>
        <Route path="/candidate/">
          <Route path="" element={<CandidatePage />} />z
          <Route path="AddCandidate" element={<AddCandidate />} />
          <Route path="result" element={<VoteingResult />} />z
        </Route>
      </Routes>
      <MainFooter />
    </React.Fragment>
  );
};

export default App;
