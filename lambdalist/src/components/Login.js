import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import useForm from "./useForm";
import Validate from "./Validate";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    Validate
  ); // This deconstructs useForm and passes in the submit function as a callback.
  const history = useHistory();
  function submit() {
		console.log('Login was pushed');
		axiosWithAuth()
			.post('api/auth/login/', values)
			.then((response) => {
				console.log('Response from LOGIN --> ', response);
				localStorage.setItem('token', JSON.stringify(response.data.token));
				history.push('/protected');
			})
			.catch((error) => {
				console.log('Post error ', error);
      })
    };
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Username</label>
          <div>
            <input
              name="username"
              type="username"
              onChange={handleChange}
              value={values.username}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
        </div>
        <button type="submit">Log in</button>
      </form>
      Don't have an account? <Link to="/signup">Sign Up</Link>
    </div>
  );
};
export default Login;