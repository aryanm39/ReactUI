import React from 'react';

const Header = () => {
  const headerStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    width: '100%',
  };

  return (
    <header style={headerStyle}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
