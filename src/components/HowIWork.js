import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HowIWork2.css'; // Ensure you create this CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faDraftingCompass, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

// Example service data structure
/*const servicesData = [
  {
    id: 1,
    icon: "iconPlaceholder", // Replace with actual icon component or path
    title: "Web Development",
    description: "Modern and responsive web design.",
  },
  {
    id: 2,
    icon: "iconPlaceholder",
    title: "E-commerce Solutions",
    description: "Custom online store development.",
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Crafting Your Success Story</h1>
      <p>Every project is an opportunity to innovate. Discover how our collaborative process turns your challenges into triumphs.</p>
      <div className="services-list">
        {servicesData.map((service) => (
          <div key={service.id} className="service-item">
            <img src={service.icon} alt={service.title} className="service-icon" /> {/* Replace <img> with your icon component if needed }
  /*          <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
        <Footer />
      </div>
      <Link to="/contact" className="start-project-button">Start Your Project</Link>
    </div>
  );
}
export default Services;
*/

// Process flow data structure
const processFlowData = [
  {
    id: 1,
    icon: faLightbulb,
    title: "Ideation",
    description: "Understanding your vision and brainstorming the roadmap.",
  },
  {
    id: 2,
    icon: faDraftingCompass,
    title: "Design",
    description: "Crafting the user experience and interface design.",
  },
  {
    id: 3,
    icon: faCode,
    title: "Development",
    description: "Turning designs into functional digital experiences.",
  },
  {
    id: 4,
    icon: faRocket,
    title: "Launch",
    description: "Deploying your project to the world.",
  },
  // Add more steps as needed
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Crafting Your Success Story</h1>
      <p>Every project is an opportunity to innovate. Discover how our collaborative process turns your challenges into triumphs.</p>
      <div className="process-flow">
        {processFlowData.map((step) => (
          <div key={step.id} className="process-step">
            <FontAwesomeIcon icon={step.icon} className="process-icon" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <Link to="/contact" className="start-project-button">Start Your Project</Link>
      <Footer />
    </div>
  );
}

export default Services;