import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// Firebase Initialization
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB5I6ATgbK8v4GjtJQxyyH8nVpdTVBfZJU",
  authDomain: "winfo20-6773f.firebaseapp.com",
  projectId: "winfo20-6773f",
  storageBucket: "winfo20-6773f.appspot.com",
  messagingSenderId: "899556997428",
  appId: "1:899556997428:web:7248d05802df22b4d30d61"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { app, db };