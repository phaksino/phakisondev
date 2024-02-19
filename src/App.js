// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import HowIWork from './components/HowIWork';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/howiwork" element={<HowIWork />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/navigation" element={<Navigation />} />
      </Routes>
    </Router>
  );
};

export default App;
