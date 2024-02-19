import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects2.css'; // Make sure to create this CSS file for styling
import Footer from './Footer';

const projectsData = [
  {
    id: 1,
    name: "E-commerce Platform Revamp",
    outcome: "Enhanced the shopping experience for a major online retailer, boosting conversion rates by 30% and customer retention by 40%.",
    caseStudyPath: "/case-studies/ecommerce-platform-revamp",
  },
  {
    id: 2,
    name: "Mobile App for Remote Learning",
    outcome: "Developed a user-friendly mobile application for a leading educational institution, increasing student engagement and participation by 50%.",
    caseStudyPath: "/case-studies/mobile-app-remote-learning",
  },
  {
    id: 3,
    name: "Enterprise Resource Planning System",
    outcome: "Implemented a comprehensive ERP system for a manufacturing company, streamlining operations and reducing costs by 20%.",
    caseStudyPath: "/case-studies/enterprise-resource-planning-system",
  },
  {
    id: 4,
    name: "Healthcare Patient Management Application",
    outcome: "Created a patient management application for a healthcare provider, improving patient data management and operational efficiency by 35%.",
    caseStudyPath: "/case-studies/healthcare-patient-management",
  },
  {
    id: 5,
    name: "Real Estate Portfolio Website",
    outcome: "Designed and developed a high-impact portfolio website for a real estate agency, leading to a 25% increase in online inquiries.",
    caseStudyPath: "/case-studies/real-estate-portfolio-website",
  },
  {
    id: 6,
    name: "Sustainability Reporting Tool",
    outcome: "Delivered a sustainability reporting tool for an environmental agency, facilitating better data visualization and reporting accuracy.",
    caseStudyPath: "/case-studies/sustainability-reporting-tool",
  },

  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Showcasing Innovation and Value</h1>
      <div className="projects-list">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.outcome}</p>
            <Link to={project.caseStudyPath} className="story-button">See the Story</Link>
          </div>
        ))}
      </div>
<Footer />
    </div>
  );
}

export default Projects;
