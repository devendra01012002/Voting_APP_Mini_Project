import React, { useEffect, useState } from 'react';
import EditPassword from './EditPassword';
import axios from 'axios';

function ProfilePage() {
    const [user, setUser] = useState(null); // Initialize user state as null

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
    }, []); // Empty dependency array to fetch user data once on component mount

    return (
        <div>
            <h1>Profile Page</h1>
            {user ? ( // Render user data only if user is not null
                <div>
                    <h3>Name: {user.user.name}</h3>
                    <h3>Age: {user.user.age}</h3>
                    <h3>Address: {user.user.address}</h3>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
            <EditPassword />
        </div>
    );
}

export default ProfilePage;
