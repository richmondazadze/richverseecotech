import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceBoxProps {
  title: string;
  description: string;
  icon: string;
  color: 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'pink';
  link?: string;
  iconClassName?: string;
}

const ServiceBox = ({ 
  title, 
  description, 
  icon, 
  color, 
  link,
  iconClassName
}: ServiceBoxProps) => {
  const content = (
    <div className={`service-box ${color}`}>
      <i className={`${icon} icon ${iconClassName || ''}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <Link to={link} className="read-more">
          <span>Read More</span>
          <i className="bi bi-arrow-right"></i>
        </Link>
      )}
    </div>
  );

  return content;
};

export default ServiceBox;
