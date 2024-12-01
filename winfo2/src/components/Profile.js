import React, { useState } from 'react';
import SignInOut from './SignInOut';
import Book from './Book';
import Quiz from './Quiz';

// Utility function to sanitize email for Firebase paths
const sanitizeEmail = (email) => email.replace(/[.#$[\]]/g, '_');

function Profile() {
  const [user, setUser] = useState('guest'); // Default to guest

  const handleSignIn = (email) => {
    setUser(email); // Set the user to the signed-in email
  };

  const handleSignOut = () => {
    setUser('guest'); // Reset to guest on sign out
  };

  const sanitizedUserId = user === 'guest' ? user : sanitizeEmail(user);

  return (
    <div>
      <h1>Profile Page</h1>
      <SignInOut user={user} onSignIn={handleSignIn} onSignOut={handleSignOut} />
    </div>
  );
}

export default Profile;

