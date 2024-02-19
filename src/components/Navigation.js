/*import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css'; // Ensure you create this CSS file for styling

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Phakiso Ntseketsi
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/howiwork" className="nav-links">How I Work</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ensure you have react-icons installed
import '../styles/Navigation2.css'; // Ensure this file is updated with the new styles

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          Phakiso Ntseketsi
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/howiwork" className="nav-links" onClick={closeMobileMenu}>How I Work</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

