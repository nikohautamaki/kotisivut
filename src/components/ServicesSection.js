import React from 'react';
import './ServicesSection.css'; // Import the CSS file for styling

// Importing icons from react-icons/fa
import { FaUserCog, FaLaptopCode, FaRegLightbulb } from "react-icons/fa";

const services = [
  {
    icon: <FaUserCog className="service-icon" />,
    header: 'Myyntiprosessi',
    description: 'Rakennamme sinulle toimivan myyntiprosessin.',
  },
  {
    icon: <FaLaptopCode className="service-icon" />,
    header: 'Myyntitekniikat',
    description: 'Opetan tehokkaat myyntitekniikat.',
  },
  {
    icon: <FaRegLightbulb className="service-icon" />,
    header: 'Markkinointistrategia',
    description: 'Luomme systemaattisen markkinointistrategian.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Miten työskentelen kanssasi?</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div> {/* Icon */}
            <div className="service-header">{service.header}</div> {/* Header */}
            <p className="service-description">{service.description}</p> {/* Description */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
