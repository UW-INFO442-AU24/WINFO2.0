import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set, get, remove, onValue } from 'firebase/database';

function SignInOut({ onSignIn, onSignOut, user }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const db = getDatabase();

  // Function to sanitize the email to make it a valid Firebase path
  const sanitizeEmail = (email) => email.replace(/[.#$[\]]/g, '_');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu|gov)$/;
    return emailRegex.test(email);
  };

  const resetGuestData = async () => {
    const guestRef = ref(db, 'users/guest');
    try {
      await remove(guestRef); // Remove guest data from Firebase
      console.log('Guest data reset successfully!');
    } catch (error) {
      console.error('Error resetting guest data:', error);
    }
  };

  const migrateGuestData = async (newUserId) => {
    const guestRef = ref(db, 'users/guest');
    const newUserRef = ref(db, `users/${newUserId}`);

    try {
      const guestDataSnapshot = await get(guestRef);
      if (guestDataSnapshot.exists()) {
        const guestData = guestDataSnapshot.val();

        // Save guest data to the new user ID
        await set(newUserRef, guestData);

        // Remove guest data
        await remove(guestRef);
        console.log('Guest data migrated successfully!');
      }
    } catch (error) {
      console.error('Error migrating guest data:', error);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      onSignIn(savedUser); // Set the saved user on load
    }
    setLoading(false); // Stop showing loading spinner
  }, [onSignIn]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.includes('@')) {
      setError('Email must contain the "@" symbol');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address ending in .edu or .gov');
    } else {
      const sanitizedEmail = sanitizeEmail(email);

      // Migrate guest data to the new user ID
      await migrateGuestData(sanitizedEmail);

      // Save the user's data under their sanitized email
      try {
        await set(ref(db, `users/${sanitizedEmail}/email`), email);
        localStorage.setItem('user', email); // Store original email
        onSignIn(email); // Pass the original email to parent
        setEmail('');
      } catch (error) {
        console.error('Error writing new user to Firebase Database', error);
      }
    }
  };

  const handleSignOut = () => {
    resetGuestData(); // Reset guest data on sign-out
    onSignOut();
    localStorage.removeItem('user'); // Clear the user from local storage
    setEmail('');
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user && user !== 'guest' ? ( // If user is signed in
        <div>
          <p>Signed in as: {user}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : ( // If user is not signed in
        <div>
          <h2>Sign In / Create Account</h2>
          <form onSubmit={handleSignIn}>
            <input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default SignInOut;
