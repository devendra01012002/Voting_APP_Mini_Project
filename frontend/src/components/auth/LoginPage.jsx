import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  let navigate =  useNavigate();

  let AddarCardRef = useRef();
  let passwordRef = useRef();
  console.log(AddarCardRef);
  const SubmitHandler = async (e) => {
      e.preventDefault();
      try {
          let aadharCardNumber = AddarCardRef.current.value;
          let password = passwordRef.current.value;
          console.log('vikash')
          let object = {
            aadharCardNumber: aadharCardNumber,
            password: password,
          };
          console.log(object)
          const response = await axios.post(
            "http://localhost:8080/user/login",
            object
          );
          console.log(response.data);
          localStorage.setItem("mes", response.data.token);
          navigate('/')
      }
      catch (err) {
          console.log(err);
          navigate('/user/login')
      }
  };

  return (
    <React.Fragment>
      <div className="main_part">
        <div className="image_sec"></div>
        <div className="login_sec">
          <h1>Login Page</h1>
          <form onSubmit={SubmitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                AddarCard Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={AddarCardRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={passwordRef}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
