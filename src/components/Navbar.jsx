import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/*<div className="navbar-logo">
        <Link to="/">Christiano Carta</Link>
        </div>*/}
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
    </nav>
  );
};

export default Navbar;
