import React from 'react';
import '../index.css'; // Make sure to import your CSS file

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Profile Image */}
      <img className="profile_IMG" src="/img/profile.png" alt="Character" />
      <h1 className="username">username</h1>
      <p className="points">Points: 100</p>

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
            <li>
              <img className="item-photo" src="/img/dress.png" alt="Bubblegum Pink Dress" />
              <span className="item-name">Bubblegum Pink Dress</span>
            </li>
            <li>
              <img className="item-photo" src="/img/crown.png" alt="Pink Crown" />
              <span className="item-name">Pink Crown</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;