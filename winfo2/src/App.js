import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MarketPlace from './components/MarketPlace';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

// Import Firebase and Firebase Authentication
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from './index'; // Import the Firestore db instance
import { doc, getDoc } from 'firebase/firestore';

export default function App() {
  // Declare shared state for user points, inventory, and user authentication
  const [userPoints, setUserPoints] = useState(50); // Default user points
  const [inventory, setInventory] = useState([]);
  const [userId, setUserId] = useState(null); // Holds the current user ID
  const [isLoading, setIsLoading] = useState(true); // Loading state for Firebase auth

  // Load cart from localStorage
  const loadCartFromLocalStorage = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    return savedCart ? savedCart : []; // Ensure it returns an array if cart is empty
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage); // Initialize cart state

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Firebase Authentication setup
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // If user is authenticated, set the userId to Firebase auth user UID
        setUserId(user.uid);
        await fetchUserData(user.uid); // Fetch user data from Firestore
      } else {
        // If no user is signed in, reset the userId
        setUserId(null);
      }
      setIsLoading(false); // Set loading to false after checking auth state
    });
  }, []);

  // Fetch user data from Firestore
  const fetchUserData = async (userId) => {
    const docRef = doc(db, 'users', userId); // Reference to the user document
    const docSnap = await getDoc(docRef);   // Fetch the document

    if (docSnap.exists()) {
      const data = docSnap.data();
      setUserPoints(data.points || 0); // Set user points
      setInventory(data.inventory || []); // Set user inventory
    } else {
      console.log('No such document!');
    }
  };

  // If still loading (auth state not yet determined), show loading spinner or placeholder
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Router>
        <Routes>
          {/* Profile route, passing userPoints, inventory, and userId */}
          <Route
            path="/Profile"
            element={<Profile userId={userId} userPoints={userPoints} inventory={inventory} />}
          />

          {/* Marketplace route, passing userPoints, setUserPoints, cart, setCart, inventory, and setInventory */}
          <Route
            path="/MarketPlace"
            element={
              <MarketPlace
                userPoints={userPoints}
                setUserPoints={setUserPoints}
                cart={cart}
                setCart={setCart}
                inventory={inventory} // Pass inventory
                setInventory={setInventory} // Pass setInventory
              />
            }
          />

          {/* Redirect from root to marketplace */}
          <Route path="/" element={<Navigate to="/MarketPlace" />} />
        </Routes>
      </Router>
    </div>
  );
}
