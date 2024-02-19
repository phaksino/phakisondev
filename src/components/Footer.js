import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer2.css'; // Ensure you create this CSS file for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>Got a project in mind? <Link to="/contact">Let's talk!</Link></p>
        {/* Add more footer content as needed */}
      </div>
    </footer>
  );
};

export default Footer;
