// === Chapter 2. Hooks Overview ===//

// ===== COMPONENT LIFECYCLE (CLASS COMPONENTS) =====
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component is mounted");
  }
  
  componentDidUpdate() {
    console.log("Component is Updated");
  }
  
  componentWillUnmount() {
    console.log("Component is unmounted/removed from DOM");
  }
  
  render() {
    return <div></div>
  }
}

// ===== FUNCTIONAL COMPONENT WITH HOOKS =====

import React, { useEffect } from 'react';

function myComponent() {
  // componentDidMount equivalent
  useEffect(() => {
    console.log("Component mounted");
  }, []); // runs once after initial render
  
  // componentDidUpdate equivalent  
  useEffect(() => {
    console.log("Component updated");
  }); // runs after every render
  
  return (
    <div>
      <p>Functional Component</p>
    </div>
  );
}