import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set, get } from 'firebase/database';

function SignInOut({ onSignIn, onSignOut, user }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const db = getDatabase();

  // Function to sanitize the email to make it a valid Firebase path
  const sanitizeEmail = (email) => {
    return email.replace(/[.#$[\]]/g, '_'); // Replaces invalid characters with underscores
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu|gov)$/;
    return emailRegex.test(email);
  };

  const containsAtSymbol = (email) => {
    return email.includes('@');
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      onSignIn(savedUser);
      setEmail(savedUser);
    }
    setLoading(false);
  }, [onSignIn]);

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');

    if (!containsAtSymbol(email)) {
      setError('Email must contain the "@" symbol');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address ending in .edu or .gov');
    } else {
      // Sanitize email to make it a valid path in Firebase
      const sanitizedEmail = sanitizeEmail(email);

      set(ref(db, 'users/' + sanitizedEmail), {
        email: email,
      })
      .then(() => {
        localStorage.setItem('user', email);
        onSignIn(email);
        setEmail('');
      })
      .catch((error) => {
        console.error('Error writing new user to Firebase Database', error);
      });
    }
  };

  const handleSignOut = () => {
    onSignOut();
    localStorage.removeItem('user');
    setEmail('');
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
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
