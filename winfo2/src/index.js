import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5I6ATgbK8v4GjtJQxyyH8nVpdTVBfZJU",
  authDomain: "winfo20-6773f.firebaseapp.com",
  projectId: "winfo20-6773f",
  storageBucket: "winfo20-6773f.appspot.com",
  messagingSenderId: "899556997428",
  appId: "1:899556997428:web:7248d05802df22b4d30d61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export db for use in other files
export { db };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

