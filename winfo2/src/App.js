import React from 'react';
import Profile from './components/Profile.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function App(props) {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/Profile" />} />
            <Route path="/Profile" element={<Profile/>} />
          </Routes>
        </Router> 
      </div>
    );
  }
  