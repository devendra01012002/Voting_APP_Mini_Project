// import React from "react";
import { NavLink } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const MainFooter = () => {
  return (
    <>
      <div>
        {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
        <div className="container my-5">
          <footer className="text-center text-white">
            {/* <!-- Grid container --> */}
            <div className="container pt-4">
              {/* <!-- Section: Social media --> */}
              <section className="mb-4">
                {/* <!-- Facebook --> */}
                <NavLink
                  className="btn btn-link fs-3 btn-floating btn-lg text-blue m-1"
                  to="https://www.facebook.com/vikash.rathour.16568/"
                  data-mdb-ripple-color="dark"
                >
                  <FaSquareFacebook />
                </NavLink>

                {/* <!-- Twitter --> */}
                <NavLink
                  className="btn btn-link fs-3 btn-floating btn-lg text-info m-1"
                  to="#!"
                  data-mdb-ripple-color="dark"
                >
                  <FaTwitter />
                </NavLink>

                {/* <!-- Google --> */}
                <NavLink
                  className="btn btn-link fs-3 btn-floating btn-lg text-dark m-1"
                  to="https://www.google.com/"
                  data-mdb-ripple-color="dark"
                >
                  <FaSquareGooglePlus />
                </NavLink>

                {/* <!-- Instagram --> */}
                <NavLink
                  className="btn btn-link fs-3 btn-floating btn-lg text-danger m-1"
                  to="https://www.instagram.com/vikash_rathour_5750/"
                  data-mdb-ripple-color="dark"
                >
                  {" "}
                  <FaInstagramSquare />
                </NavLink>

                {/* <!-- Linkedin --> */}
                <NavLink
                  className="btn btn-link fs-3 btn-floating btn-lg text-info m-1"
                  to="https://www.linkedin.com/in/vikash-rathour-066b40229/"
                  data-mdb-ripple-color="dark"
                >
                  <FaLinkedin />
                </NavLink>
                {/* <!-- Github --> */}
                <NavLink
                  className="btn btn-link btn-floating btn-lg text-dark m-1 fs-3"
                  to="https://github.com/v-rathour"
                  data-mdb-ripple-color="dark"
                >
                  <FaGithubSquare />
                </NavLink>
              </section>
              {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center text-dark p-2">
              © 2024 My Website Name :{" "}
              <NavLink
                className="text-info"
                to="http://localhost:3000/allquotes"
              >
                DappVotes
              </NavLink>
            </div>
            <div className="text-center text-dark p-2">
              📞ContectUs: +91 815 003 115
            </div>
            {/* <!-- Copyright --> */}
          </footer>
        </div>
        {/* <!-- End of .container --> */}
      </div>
    </>
  );
};

export default MainFooter;
