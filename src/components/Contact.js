import React, { useState } from 'react';
import '../styles/Contact2.css'; // Ensure you create this CSS file for styling
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
// Instead of logging the formData, send it to the Netlify function
fetch('/.netlify/functions/sendMail', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(data => {
  console.log(data);
  alert('Message sent! We will get back to you soon.');
})
.catch((error) => {
  console.error('Error:', error);
  alert('An error occurred while sending the message.');
});
};

  return (
    <div className="contact-container">
      <h1>Let's Create Something Amazing Together</h1>
      <p>Ready to take the next step? Reach out and let's discuss how we can bring your project to life.</p>
      <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="contact-form">
      <input type="hidden" name="form-name" value="contact" />
      
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="follow-me">
        <p>Follow Me:</p>
        <div className="social-icons">
          {/* Replace href values with your social media links */}
          <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* Add more icons as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
