import React from 'react';
import './App.css'; // Import your CSS file
import { Route, Router, Routes } from 'react-router-dom';
import AdminDashboard from './Component/AdminDashboard';
import AddVenue from './Component/AddVenue';


function App() {
  return (
    <div>
     
        <Routes>
          <Route path='/' element={<AdminDashboard/>}/>
          <Route path='/addvenue' element={<AddVenue/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
