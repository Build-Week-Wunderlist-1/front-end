import React, { useState } from "react";
import axios from "axios";
import useForm from './useForm';
import Validate from './Validate';

function Login() {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, Validate); // This deconstructs useForm and passes in the submit function as a callback.

  function submit() {
    console.log('Submitted successfully.')
  }
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email</label>
          <div>
            <input name="email" type="email" value={values.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input name="password" type="password" value={values.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
          </div>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;