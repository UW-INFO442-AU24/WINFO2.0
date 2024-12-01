import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MarketPlace from './components/MarketPlace';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import process from 'process';

export default function App() {
  // Declare shared state for user points
  const [userPoints, setUserPoints] = useState(50);  // Default user points (could be dynamic)

  return (
    <div>
      <Router>
        <Routes>
          {/* Profile route with userPoints as a prop */}
          <Route path="/Profile" element={<Profile userPoints={userPoints} />} />

          {/* Marketplace route with userPoints and setUserPoints as props */}
          <Route
            path="/MarketPlace"
            element={<MarketPlace userPoints={userPoints} setUserPoints={setUserPoints} />}
          />

          {/* Redirect from root to the marketplace */}
          <Route path="/" element={<Navigate to="/MarketPlace" />} />
        </Routes>
      </Router>
    </div>
  );
}
