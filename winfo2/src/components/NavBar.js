import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(getAuth())
      .then(() => {
        setIsMenuOpen(false);
        window.alert("Signed Out");
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClassName = isMenuOpen ? 'navbar-nav show' : 'navbar-nav';

  return (
    <header className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" aria-label="Website logo">
            <img src="/book/book_images/logo.png" alt="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className={navbarClassName} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/Home" className="nav-link" onClick={toggleMenu}>
                  Library
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Book" className="nav-link" onClick={toggleMenu}>
                  Book
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Quiz" className="nav-link" onClick={toggleMenu}>
                  Quiz
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/CharacterBuilding" className="nav-link" onClick={toggleMenu}>
                  Character Building
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/MarketPlace" className="nav-link" onClick={toggleMenu}>
                  Market Place
                </NavLink>
              </li>
            </ul>
          </div>

          <button
            className="profile-btn"
            onClick={() => navigate('/Profile')}
            aria-label="Go to Profile page"
          >
            <img src="/book/book_images/user.png" alt="User" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
