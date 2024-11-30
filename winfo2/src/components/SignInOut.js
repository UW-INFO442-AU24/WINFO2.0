import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set, get, remove } from 'firebase/database';

function SignInOut({ onSignIn, onSignOut, user }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const db = getDatabase();

  const sanitizeEmail = (email) => email.replace(/[.#$[\]]/g, '_');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu|gov)$/;
    return emailRegex.test(email);
  };

  const migrateUndefinedData = async (newUserId) => {
    const undefinedRef = ref(db, 'users/undefined');
    const newUserRef = ref(db, `users/${newUserId}`);

    try {
      const undefinedDataSnapshot = await get(undefinedRef);
      if (undefinedDataSnapshot.exists()) {
        const undefinedData = undefinedDataSnapshot.val();
        await set(newUserRef, undefinedData);
        await remove(undefinedRef);
        console.log('Data migrated from undefined to new user ID successfully!');
      }
    } catch (error) {
      console.error('Error migrating undefined data:', error);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      onSignIn(savedUser);
    }
    setLoading(false);
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
      await migrateUndefinedData(sanitizedEmail);

      try {
        await set(ref(db, `users/${sanitizedEmail}/email`), email);
        localStorage.setItem('user', email);
        onSignIn(email);
        setEmail('');
        console.log(`Signed in as ${email}`);
      } catch (error) {
        console.error('Error writing new user to Firebase Database', error);
      }
    }
  };

  const handleSignOut = async () => {
    const currentUserId = sanitizeEmail(user);

    try {
      const currentUserRef = ref(db, `users/${currentUserId}`);
      const undefinedRef = ref(db, 'users/undefined');

      const currentUserDataSnapshot = await get(currentUserRef);
      if (currentUserDataSnapshot.exists()) {
        const currentUserData = currentUserDataSnapshot.val();
        await set(undefinedRef, currentUserData);
        await remove(currentUserRef);
      }

      localStorage.setItem('user', 'undefined');
      onSignOut();
      console.log('Signed out successfully.');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user && user !== 'undefined' ? (
        <div>
          <p>Signed in as: {user}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
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
