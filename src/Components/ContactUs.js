import React, { useState } from 'react';
import './ContactUs.css'; // Include your CSS file for Contact Us styles
import logo from '../Images/logo.jpg'; 

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can implement the logic to handle form submission (e.g., send data to backend)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // You can add further logic like sending form data to a backend API, etc.
  };

  return (
    <div>
    <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto', position: 'absolute', top: '20px', left: '20px' }} />
    <div className="contact-us-container">
      <div className="contact-us-bg-container"></div>
      <div className="contact-us-content">
        <form onSubmit={handleSubmit}>
        <h2 style={{ fontFamily: "'Sofia', sans-serif" }}>Contact Us</h2>
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
          <button type="submit"><b>Send</b></button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
