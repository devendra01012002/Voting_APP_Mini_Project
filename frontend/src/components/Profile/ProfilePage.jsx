import  { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import "./ProfilePage.css"

function ProfilePage() {
    const [user, setUser] = useState(null); 
    const [message, setmessage] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.log("Token not found in localStorage");
                    return;
                }

                const response = await axios.get("http://localhost:8080/user/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("API Response:", response);

                if (response.data) {
                    setUser(response.data);
                    console.log("User data:", response.data);
                } else {
                    console.log("No data received from the API");
                }
            } catch (err) {
                console.log("API Error:", err);

                if (err.response && err.response.data && err.response.data.error) {
                    console.log("API Error Message:", err.response.data.error);
                } else {
                    console.log("Unknown API Error");
                }
            }
        };

        fetchUser();
        add();
    }, []); // Empty dependency array to fetch user data once on component mount
    
    const clickHandler = () => {
      localStorage.setItem("message", "");
    };

    function add() {
      setmessage(localStorage.getItem("message"));
    }

    return (
      <>
        <div className=" mt-3 mx-auto bg-info">
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

        <div>
          {user ? ( // Render user data only if user is not null
            <>
              <div className="profile_sec">
                <h1>User Profile</h1>
                <section className="profile">
                  <section className="profile_image">
                    <div className="pro_div">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="profileImage"
                      />
                      <h3>{user.user.name}</h3>
                    </div>
                  </section>
                  <section className="user_detail">
                    <div className="user">
                      <h3>
                        <span>Name:</span> {user.user.name}
                      </h3>
                      <h3>
                        <span>Age:</span> {user.user.age}
                      </h3>
                      <h3>
                        <span>Email:</span> {user.user.email}
                      </h3>
                      <h3>
                        <span>AadharCardNumber:</span>{" "}
                        {user.user.aadharCardNumber}
                      </h3>
                      <h3>
                        <span>Mobile No:</span> {user.user.mobile}
                      </h3>
                      <h3>
                        <span>Address:</span> {user.user.address}
                      </h3>
                    </div>
                    <div className="">
                      <NavLink className="btn btn-success" to="/user/password">
                        change password
                      </NavLink>
                    </div>
                  </section>
                </section>
              </div>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </>
    );
}

export default ProfilePage;
