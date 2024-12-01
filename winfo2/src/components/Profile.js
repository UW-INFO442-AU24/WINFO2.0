import React, { useEffect } from 'react';
import NavBar from './NavBar';
import '../index.css'; // Make sure to import your CSS file
import { db } from '../index'; // Import Firestore configuration
import { doc, getDoc } from 'firebase/firestore';

const Profile = ({ userId, userPoints, setUserPoints, inventory, setInventory }) => {

  // Fetch user data from Firebase
  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, 'users', userId); // Reference to the user document in Firebase
      const docSnap = await getDoc(docRef);   // Fetch the document from Firestore

      if (docSnap.exists()) {
        const data = docSnap.data(); // Get user data
        setUserPoints(data.points || 0); // Set user points from Firebase data (default to 0)
        setInventory(data.inventory || []); // Set user inventory from Firebase data (default to empty array)
      } else {
        console.log("No such document!");
      }
    };

    if (userId) {  // Only fetch user data if userId exists
      fetchUserData();
    }
  }, [userId, setInventory, setUserPoints]); // Re-run the effect if userId, setInventory, or setUserPoints changes

  return (
    <div className="profile-page">
      <NavBar />
      <div className="profile-container">
        {/* Profile Image */}
        <img className="profile_IMG" src="/img/profile.png" alt="Character" />
        <h1 className="username">username</h1>
        
        {/* User points fetched from Firebase */}
        <p className="points">Points: {userPoints}</p>

        {/* Main Content: Student Info, Completed Books, Inventory */}
        <div className="main-content">
          {/* Student Info */}
          <div className="student-info">
            <p>Grade Level: 10</p>
            <p>School: Springfield High</p>
            <p>Teacher: Mr. Smith</p>
            <p>StudentID: 123456</p>
          </div>

          {/* Completed Books */}
          <div className="completed-books">
            <h2>Completed Books</h2>
            <ul className="books-list">
              <li>
                <img className="book-cover" src="/img/alexander.png" alt="The Crossover by Kwame Alexander" />
                <span className="book-title">The Crossover</span>
                <span className="book-author">Kwame Alexander</span>
                <span className="stars">⭐️⭐️⭐️⭐️⭐️</span>
              </li>
              <li>
                <img className="book-cover" src="/img/jackson.png" alt="The Lightning Thief by Percy Jackson" />
                <span className="book-title">The Lightning Thief</span>
                <span className="book-author">Percy Jackson</span>
                <span className="stars">⭐️⭐️⭐️⭐️</span>
              </li>
            </ul>
          </div>

          {/* Inventory */}
          <div className="inventory">
            <h2>Inventory</h2>
            <ul className="inventory-items">
              {/* Dynamic inventory items from Firebase */}
              {inventory.length > 0 ? (
                inventory.map((item, index) => (
                  <li key={index}>
                    <img className="item-photo" src={item.image} alt={item.name} />
                    <span className="item-name">{item.name}</span>
                  </li>
                ))
              ) : (
                <li>Your inventory is empty.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

