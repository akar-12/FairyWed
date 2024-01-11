import React, { useState } from 'react';
import axios from 'axios';
import './AddVenue.css';


const AddVenue = () => {
  const [venueData, setVenueData] = useState({
    name: '',
    location: '',
    img: '', 
    contact: '', 
    price: '',
    details: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenueData({
      ...venueData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVenueData({
          ...venueData,
          img: reader.result  // Use the reader.result as the base64 image string
        });
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/addvenue', venueData);

      if (response.status === 201) {
        alert('Venue added successfully!');
        setVenueData({
          name: '',
          details: '',
          price: '',
          location: '',
          img: ''
        });
      }
    } catch (error) {
      console.error('Error adding venue:', error);
      alert('An error occurred while adding the venue.');
    }
  };

  return (
    <div className="container" >
    <form className="venue-form" onSubmit={handleSubmit}>
      <h2 className="header-title">Add Venue</h2>
      <label>
        Name:
        <input type="text" name="name" value={venueData.name} onChange={handleChange} />
      </label>
      <label>
        Details:
        <input type="text" name="details" value={venueData.details} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={venueData.price} onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={venueData.location} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="file" name="image" onChange={handleImageChange} />
      </label>
      <button type="submit">Add Venue</button>
    </form>
    </div>
  );
};

export default AddVenue;
