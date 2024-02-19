import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home2.css'; // Ensure this CSS file exists in your styles directory

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Transforming Ideas into Digital Masterpieces</h1>
        <p>I’m Phakiso Ntseketsi, a <strong>web developer</strong> and <strong>designer</strong> dedicated to crafting unique digital experiences. Let's bring your vision to life.</p>
        <Link to="/projects" className="cta-button">Discover How</Link>
      </section>
    </div>
  );
}

export default Home;
