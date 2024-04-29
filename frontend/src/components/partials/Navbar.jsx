import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {  SiGnuprivacyguard } from "react-icons/si";
import { CgLogIn } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
// import axios from "axios";
// import { GiClick } from "react-icons/gi";

const Navbar = () => {
  const [isAuthentication, SetAuthentication] = useState(null);

  // const checkAuthenticationreq = async () => {
  //   try {
  //     const response = await axios.patch(
  //       "http://localhost:8080/check-auth",
  //       { withCredentials: true }
  //     );

  //     SetAuthentication(response.data.authenticated);
  //   } catch (error) {
  //     SetAuthentication(false);
  //   }
  // };

  // useEffect(() => {
  //   checkAuthenticationreq();
  // },[])

  const UserLogin = () => {
    SetAuthentication(localStorage.getItem('token'))
  }

  useEffect(() => {
    UserLogin();
  }, [isAuthentication]);
  
  const LogoutUser = () => {
    
    localStorage.removeItem('token');
    SetAuthentication(null);
  }
  
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg text-light" style={{ backgroundColor: "#a70529" }}>
        <div className="container-fluid px-5">
          <NavLink className="navbar-brand fs-3 fw-bolder text-info" to="#">
            E-Chunav
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
              <li className="nav-item">
                <NavLink className="nav-link active text-light" to="/candidate">
                  Candidate
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-light"
                  to="/candidate/AddCandidate"
                  aria-disabled="true"
                >
                  AddCandidate
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
