import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Profile() {

  const [profile, setProfile] = useState({
    username: "",
    email: "",
    password: "",

  })

  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setProfile({ ...profile });
    axiosWithAuth()
      .post("end-point", profile)
      .then(res => {
        props.history.push("/todolist")
      })
      .catch(err => console.log("PROFILE-ERROR:", err))
  }



  return (
    <div className="profile-container">
      <h3>Profile</h3>
      <form onSubmit={handleSubmit} >
        <div>
          <div>
            <input
              name="userName"
              type="text"
              placeholder="username"
              value={profile.username}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label>Email</label>
          <div>
            <input
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              name="password"
              type="password"
              value={profile.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}
