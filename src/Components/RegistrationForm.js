import React, { useState } from 'react';
import './RegistrationForm.css';
import logo from '../Images/logo.jpg';
import axios from 'axios';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = { username, password, email, contact };

    try {
      const response = await axios.post('http://localhost:3030/registration', userData);

      if (response.status === 200) {
        window.alert('Registration successful!');
        console.log('Registration successful');
        redirectToLoginPage();
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('Registration failed. Please check the console for details.');
    }
  };

  const redirectToLoginPage = () => {
    window.location.href = '/login';
  };

  return (
    <div className="register-bg-container">
      <img
        src={logo}
        alt="Logo"
        style={{ width: '100px', height: 'auto', position: 'absolute', top: '20px', left: '20px' }}
      />
      <div className="register-container">
        <div className="registration-container">
          <form onSubmit={handleSubmit} className="registration-form">
            <h2 style={{ fontFamily: "'Sofia', sans-serif" }}>Registration</h2>
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
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
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="contact">Contact</label>
              <input
                type="number"
                id="contact"
                value={contact}
                onChange={handleContactChange}
                required
              />
            </div>
            <button type="submit" onClick={handleSubmit}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;