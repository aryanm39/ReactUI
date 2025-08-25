import React from 'react';

function Card({ title, image, description }){
 const cardStyle = {
    border: '1px solid #4a90e2',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(74, 144, 226, 0.2)',
    overflow: 'hidden',
    width: '300px',
    margin: '10px',
    backgroundColor: 'white',
  };

  const contentStyle = {
    padding: '16px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '8px',
    color: '#2c3e50',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#5a6c7d',
  };

  return (
    <div style={cardStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
