import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { CgLogIn } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
// import { GiClick } from "react-icons/gi";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(localStorage.getItem("mes"));
   setUser();
  },[])
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid px-5">
          <NavLink className="navbar-brand fs-3 fw-bolder text-info" to="#">
            VotingApp
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
                  className="nav-link active "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/candidate">
                  Candidate
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active "
                  to="/candidate/votecount"
                  aria-disabled="true"
                >
                  Result
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav fw-medium fs-4 me-auto mb-2 mb-lg-0">
                {!user ? (
                  <React.Fragment>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active "
                        aria-current="page"
                        to="/user/signup"
                      >
                        <SiGnuprivacyguard />
                        Signup
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className="nav-link active "
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
                      className="nav-link active "
                      aria-current="page"
                      to="/user/logout"
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
