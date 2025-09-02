import React from 'react';

function Card({ title, image, description }){
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#666',
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
