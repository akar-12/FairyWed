import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import logo from '../Images/logo.jpg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (password.trim() === '') {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const redirectToLoginPage = () => {
    window.location.href = '/mainpage';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3030/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          alert('Login successful!');
          redirectToLoginPage();
        } else {
          console.error('Login failed:', response.statusText);
          alert('Incorrect email or password');
        }
      } catch (error) {
        console.error('Login failed:', error.message);
        // Handle login failure, show an error message, etc.
      }
    }
  };

  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        style={{ width: '100px', height: 'auto', position: 'absolute', top: '20px', left: '20px' }}
      />
      <div className="login-bg-container"></div>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 style={{ fontFamily: "'Sofia', sans-serif" }}>Login</h2>

          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button className="custom" type="submit">
            Login
          </button>
          <p>
            Not registered? <Link to="/registration">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
