import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#34495e',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <footer style={footerStyle}>
      <h1>Footer</h1>
    </footer>
  );
};

export default Footer;
