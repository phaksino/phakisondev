/*import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutMe2.css'; // Make sure to create this CSS file for styling
import Footer from './Footer';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1>Driven by Passion, Defined by Creativity</h1>
      <p>From curious enthusiast to professional web innovator, my journey is about leveraging technology to create impactful solutions.</p>
      <Link to="/contact" className="connect-button">Connect with Me</Link>
      <Footer />
    </div>
  );
}

export default AboutMe;*/

import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg'; // Update with your profile picture path
import '../styles/AboutMe2.css'; // Ensure this file is updated with the new styles
import Footer from './Footer';

//<p>From curious enthusiast to professional web innovator, my journey is about leveraging technology to create impactful solutions.</p>//
const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1>Driven by Passion, Defined by Creativity</h1>
      <div className="bio-section">
        <img src={profilePic} alt="Your Name" className="profile-pic" />
        <div className="bio-text">
          <h2>Bio</h2>
      <p>From curious enthusiast to professional web innovator, my journey in <strong>Web Development</strong> is marked by a relentless pursuit of creativity and impact. Discovering web development was a turning point in my life, transforming my passion for technology into a career dedicated to crafting digital solutions.</p>
      <p>With over <strong><em>5 years</em></strong> of experience, I've honed my skills in <strong><em>html, CSS, Javascript, React, Nodejs</em></strong>, enabling me to transform complex problems into elegant, user-centric solutions. 
         My endeavors encompass a wide range of sectors, <em>including e-commerce platforms, chat applications, and educational tech initiatives,</em> with each project serving as a pivotal step towards refining my expertise in digital innovation.</p>
      <p><strong>What drives me?</strong> A deep belief in the transformative power of technology and a commitment to excellence. Whether it's through developing seamless websites or creating dynamic applications, my goal is to leave a lasting impact on both clients and users.</p>
      <blockquote>"Within the vast expanse of technology, I seek to bridge innovation and value, turning complex challenges into elegant, user-centric solutions."</blockquote>
      <p>Ready to bring your vision to life? Let's connect and explore the possibilities together.</p>
      
        </div>
      </div>
      <Link to="/contact" className="connect-button">Connect with Me</Link>
      <Footer />
    </div>
  );
}

export default AboutMe;
