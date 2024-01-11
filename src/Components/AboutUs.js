import React from 'react';
import './AboutUs.css';
import logo from '../Images/logo.jpg'; 

const AboutUs = () => {
  return (
   
      <div className="about-us-container">
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto', position: 'absolute', top: '20px', left: '20px' }} />
        <div className="about-us-overlay"></div>
        <div className="about-us-content">
          <h2 style={{ fontFamily: "'Sofia', sans-serif" }}>About Us</h2>
          <p>
            <strong>Welcome to our destination wedding venues booking website! We specialize in providing an exquisite collection of venues in beautiful locations around the world.</strong>
          </p>
          <p>
            <strong>Our mission is to make your wedding planning experience seamless by offering a diverse range of venues that cater to your preferences, whether it's a beachfront paradise, a rustic countryside setting, or a luxurious resort.</strong>
          </p>
          <p>
            <strong>With our user-friendly interface, you can explore various venues, view detailed information, check availability, and easily book your dream destination for your special day.</strong>
          </p>
          <p>
            <strong>We understand the significance of this momentous occasion in your life and strive to ensure that your wedding day is nothing short of magical.</strong>
          </p>
        </div>
      </div>
  );
};

export default AboutUs;
