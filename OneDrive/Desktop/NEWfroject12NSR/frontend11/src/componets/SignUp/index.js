
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

import './index.css';
import LoginValidation from '../LoginValidation';

function SignUp() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate()


    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    useEffect(() => {
        setErrors(LoginValidation(values));
    }, [values]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (Object.keys(errors).every(key => errors[key] === "")) {
            const url = "http://localhost:3000/sqldata"
            const options = {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            }

            try {
                const response = await fetch(url, options);
                const data = await response.text();
                console.log(data);
                setValues({name: '',
                email: '',
                password: ''})
             
                navigate("/login")


            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.log("not fetch data")
        }
    };

    return (
        <div className="App">
            <h1 style={{ color: "red" }}>Sign Up</h1>
            <form onSubmit={handleSubmit} className="formcontainer">
                <div className='action'>
                    <label className="label" htmlFor="name">
                        Name
                    </label>
                    <input onChange={handleChange} className='input' type="text" placeholder='Enter Name' name="name" />
                </div>
                {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
                <div className='action'>
                    <label className="label" htmlFor="email">
                        Email
                    </label>
                    <input onChange={handleChange} className='input' type="email" placeholder='Enter Email' name="email" />
                </div>
                {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                <div className='action'>
                    <label className="label" htmlFor="password">
                        Password
                    </label>
                    <input onChange={handleChange} className='input' type="password" placeholder='Enter Password' name="password" />
                </div>
                {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
                <button className='button' type='submit'>Sign Up</button>
                <p className='para'>You are agreeing to our terms & conditions</p>
                {/* <Link to='/'><button className='buttons' type="button">Login</button></Link>*/}
            </form>
        </div>
    );
}

export default SignUp;

