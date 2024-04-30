import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {  SiGnuprivacyguard } from "react-icons/si";
import { CgLogIn } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

// import axios from "axios";
// import { GiClick } from "react-icons/gi";

const Navbar = () => {
  const [isAuthentication, SetAuthentication] = useState(null);
  const [isAdmin, setAdmin] = useState(false);
  
  const navigate = useNavigate();

  const UserLogin = () => {
    SetAuthentication(localStorage.getItem('token'))
    if (localStorage.getItem('role') === 'admin') {
      setAdmin(true);
    }
  }

  useEffect(() => {
    UserLogin();
  }, []);
  
  const LogoutUser = () => {
    
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem("User");
    SetAuthentication(null);
    setAdmin(false);
    window.location.href = "/user/login";
  }
  const ProfileClick = ()=>{
    navigate('user/profile');
  }
  
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg text-light"
        style={{ backgroundColor: "rgb(43, 122, 96)" }}
      >
        <div className="container-fluid px-5">
          <NavLink className="navbar-brand fs-3 fw-bolder text-info" to="#">
            E-Vote
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  fw-semibold fs-5 me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {!isAdmin ? (
                ""
              ) : (
                <>
                  
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active text-light"
                      to="/candidate/AddCandidate"
                      aria-disabled="true"
                    >
                      AddCandidate
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink className="nav-link active text-light" to="/candidate">
                  Candidate
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-light"
                  to="/candidate/result"
                  aria-disabled="true"
                >
                  Result
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav fw-medium fs-4 me-auto mb-2 mb-lg-0">
                {!isAuthentication ? (
                  <React.Fragment>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active text-light"
                        aria-current="page"
                        to="/user/signup"
                      >
                        <SiGnuprivacyguard />
                        Signup
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className="nav-link active text-light"
                        aria-current="page"
                        to="/user/login"
                      >
                        <CgLogIn />
                        Login
                      </NavLink>
                    </li>
                  </React.Fragment>
                ) : (
                  <>
                  <li className="nav-item">
                    <NavLink
                      onClick={LogoutUser}
                      className="nav-link active text-light"
                      aria-current="page"
                    >
                      Logout
                      <MdOutlineLogout />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/user/profile"
                    >
                      <CgProfile />
                      Profile
                    </NavLink>
                  </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
