import React from 'react';

const VenueDetails = () => {
  // Sample data for destination wedding venues (replace this with your actual data)
  const venues = [
    {
      id: 1,
      name: 'Venue 1',
      location: 'Location 1',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
      id: 2,
      name: 'Venue 2',
      location: 'Location 2',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
      id: 3,
      name: 'Venue 3',
      location: 'Location 3',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    // Add more venues as needed
  ];

  return (
    <div>
      {venues.map((venue) => (
        <div key={venue.id} className="venue-card">
          <img src={venue.image} alt={venue.name} />
          <h3>{venue.name}</h3>
          <p>{venue.location}</p>
        </div>
      ))}
    </div>
  );
};

export default VenueDetails;
