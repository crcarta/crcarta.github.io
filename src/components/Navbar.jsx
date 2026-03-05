import React, { useState } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onToggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <li className="navbar-item">
              <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/resume" className="navbar-link" onClick={() => setIsOpen(false)}>
                Resume
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/portfolio" className="navbar-link" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="theme-toggle-button"
          onClick={onToggleTheme}
          aria-label={theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}
        >
          <FaRegLightbulb />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;