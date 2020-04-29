import React, { useState } from "react";
import axios from "axios";
import useForm from './useForm';
import Validate from './Validate';
import Profile from "../Components/Profile"
import axiosWithAuth from "../utils/axiosWithAuth"

const Login = () => {
    const { handleChange, handleSubmit, values, errors } = useForm(submit, Validate); // This deconstructs useForm and passes in the submit function as a callback.

    function submit() {
      axios.post("https://lambdawunderlist.herokuapp.com/api/auth/login", values)
      .then(res => {
          console.log("Success!", res);
      })
      .catch(err => {
          console.log(err.response);
      })
    }
  
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Username</label>
          <div>
            <input name="username" type="username" onChange={handleChange} value={login.username} />
            {/* {errors.username && <p>{errors.username}</p>} */}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input name="password" type="password" onChange={handleChange} value={login.password} />
            {/* {errors.password && <p>{errors.password}</p>} */}
          </div>
        </div>
        <button type="submit">Log in</button>
      </form>
      <Profile />
    </div>
  );
}

export default Login;



{/* <input name="username" type="username" value={values.username} onChange={handleChange} />
   {errors.username && <p>{errors.username}</p>} */}


// <input name="password" type="password" value={values.password} onChange={handleChange} />
// { errors.password && <p>{errors.password}</p> }