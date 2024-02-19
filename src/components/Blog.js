import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog2.css'; // Ensure you create this CSS file for styling
import Footer from './Footer';
const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Insights and Innovations</h2>
      <p>Dive into the latest trends, projects, and ideas shaping the digital world.</p>
      <Link to="/blog" className="explore-blog-btn">Explore the Blog</Link>
<Footer />
    </div>
  );
};

export default Blog;
