import React, { useState, useEffect } from 'react';
import logo from '../Images/logo.jpg';
import axios from 'axios'; // Import Axios for making API requests
 import { Link } from 'react-router-dom';
 import './AdminDashboard.css';


function AdminDashboard() {
  const [currentContent, setCurrentContent] = useState('dashboard');
  const [tableData, setTableData] = useState([]);

  const userCount = 150; // Replace with actual count of users
  const bookingCount = 300; // Replace with actual count of bookings

  const toggleContent = (section) => {
    setCurrentContent(section);
  };
  
  useEffect(() => {
    // Fetch table data from MongoDB using Axios (Update the URL with your API endpoint)
    axios.get('http://localhost:3030/Admin')
      .then((response) => {
        setTableData(response.data); // Set the fetched data to tableData state
      })
      .catch((error) => {
        console.error('Error fetching table data:', error);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="sidebar">
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto', position: 'absolute', top: '20px', left: '20px' }} /><br /><br />
        <nav>
          <ul>
            <li onClick={() => toggleContent('dashboard')}>Dashboard</li>
            <li onClick={() => toggleContent('manageVenue')}>Manage Venues</li>
            <li onClick={() => toggleContent('manageClient')}>Manage Client</li>
            <li onClick={() => toggleContent('orders')}>Messages</li>
            <li onClick={() => toggleContent('booking')}>Booking details</li>
            <li onClick={() => toggleContent('review')}>Review</li>
            <li><a href="">Logout</a></li>
          </ul>
        </nav>
      </div>

      <div className="content">
        {currentContent === 'dashboard' && (
          <div>
            <h1>Dashboard</h1>
            <div className="card-container">
              <div className="card">
                <h3>User Count</h3>
                <p>{userCount}</p>
              </div>
              <div className="card">
                <h3>Booking Count</h3>
                <p>{bookingCount}</p>
              </div>
            </div>
          </div>
        )}
        {currentContent === 'manageVenue' && (
          <div>
            <h1>Manage Venues</h1>
            <Link to="/addvenue">
            <button className="add-venue-button">Add Venue</button>
            </Link>
            {/* Display MongoDB data in a table */}
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.column1}</td>
                    <td>{data.column2}</td>
                    {/* Display additional columns from MongoDB */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Add other content sections as needed */}
      </div>
    </div>
  );
}

export default AdminDashboard;
