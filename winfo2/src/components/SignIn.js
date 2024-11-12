import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'; // import useAuthState

export default function SignIn() {
    const auth = getAuth();
    const [currentUser] = useAuthState(auth); // useAuthState hook for user state
    const navigator = useNavigate();

    const firebaseUiConfigObj = {
        signInOptions: [
            { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
            { provider: GoogleAuthProvider.PROVIDER_ID },
        ],
        signInFlow: 'popup',
        credentialHelper: 'none',
        callbacks: {
            signInSuccessWithAuthResult: () => {
                window.alert("Signed in!");
                navigator("/"); // Redirect on successful sign-in
            },
        },
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Successfully signed out.');
                navigator('/');
            })
            .catch((error) => console.log('Error signing out:', error));
    };

    return (
        <div className="container-fluid">
            <header className="giver-header">
                <h1 className="giver-title">Sign In</h1>
            </header>
            <main className="signin-container">
                {currentUser ? (
                    <div className="signed-in">
                        <p>Welcome, {currentUser.displayName}!</p>
                        <button className="nav-link btn sign-in-btn" onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <div className="signin-buttons">
                        <StyledFirebaseAuth
                            firebaseAuth={auth}
                            uiConfig={firebaseUiConfigObj}
                        />
                    </div>
                )}
            </main>
        </div>
    );
}
