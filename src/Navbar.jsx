// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
