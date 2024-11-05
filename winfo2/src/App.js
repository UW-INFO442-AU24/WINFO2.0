\import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessoriesFilter from './components/AccessoriesFilter/AccessoriesFilter.js';
import Book from './components/Book/Book.js';
import BookFilter from './components/BookFilter/BookFilter.js';
import CharacterBuilding from './components/CharacterBuilding/CharacterBuilding.js'; // Check this path
import Home from './components/Home/Home.js';
import Inventory from './components/Inventory/Inventory.js';
import MarketPlace from './components/MarketPlace/MarketPlace.js';
import NavBar from './components/NavBar/NavBar.js';
import Profile from './components/Profile/Profile.js';
import ProgressBar from './components/ProgressBar/ProgressBar.js';
import Quiz from './components/Quiz/Quiz.js';

export default function App(props) {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/AccessoriesFilter" element={<AccessoriesFilter />} />
            <Route path="/Book" element={<Book/>} />
            <Route path="/BookFilter" element={<BookFilter/>} />
            <Route path="/CharacterBuilding" element={<CharacterBuilding/>} /> {/* Route for Character Building */}
            <Route path="/Home" element={<Home/>} />
            <Route path="/Inventory" element={<Inventory/>} />
            <Route path="/MarketPlace" element={<MarketPlace/>} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/ProgressBar" element={<ProgressBar/>} />
            <Route path="/Quiz" element={<Quiz/>} />
          </Routes>
        </Router> 
      </div>
    );
  }
