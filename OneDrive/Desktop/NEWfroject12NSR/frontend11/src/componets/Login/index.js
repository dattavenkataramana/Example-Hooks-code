 


import React, { useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import './index1.css';
import LoginValidation from '../LoginValidation';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });


const navigation = useNavigation()


  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
   

  const handleChange = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(LoginValidation(values));
    if (Object.keys(errors).every(key => errors[key] === "")) {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        const data = await response.json();
         console.Console.log(data)
        if (response.ok) {
          navigation('/');
        } else {
          setErrorMessage('User not found. Please register.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>USER LOGIN</h1>
      <form onSubmit={handleSubmit} className="formcontainer">
        <div className='action'>
          <label className="label" htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            onChange={handleChange}
            name="email"
            className='input'
            type="email"
            placeholder='Enter Email'
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div className='action'>
          <label className="label" htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            onChange={handleChange}
            className='input'
            name="password"
            type="password"
            placeholder='Enter Password'
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        </div>
        <button className='button' type="submit">Login</button>
        <p className='para'>{errorMessage}</p>
        <p className='para'>You agree to our terms & conditions</p>
        <Link to='/signup'><button className='buttons' type="button">Create Account</button></Link>
      </form>
    </div>
  );
}

export default Login;
