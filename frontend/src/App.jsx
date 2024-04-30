import React from "react";
import { Route, Routes } from "react-router-dom";
// import SignUpPage from './components/auth/SignUpPage'
import SignUp2 from "./components/auth/Sign2";
import LoginPage from "./components/auth/Login2";
import Navbar from "./components/partials/Navbar";
import Home from "./components/Home/Home";
import MainFooter from "./components/partials/MainFooter";
import AddCandidate from "./components/candidate/CandidateRoute/AddCandidate";
import CandidatePage2 from "./components/candidate/CandidateRoute/CandidatePage2";
import ResultCard from "./components/candidate/Vote/ResultCard";
import UserProfile from "./components/partials/UserProfile";
import ProfilePage from "./components/Profile/ProfilePage";
import EditPassword from "./components/Profile/EditPassword";




const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/">
          {/* <Route path="signup" element={<SignUpPage/>} /> */}
          <Route path="signup" element={<SignUp2 />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="password" element={<EditPassword/>} />
        </Route>
        <Route path="/candidate/">

          <Route path="" element={<CandidatePage2 />} />

          <Route path='AddCandidate' element={<AddCandidate/> } />
          <Route path="result" element={<ResultCard/>} />
        </Route>

        <Route path="/profile" element={<UserProfile/>} />
      </Routes>
      <MainFooter />
    </React.Fragment>
  );
};

export default App;
