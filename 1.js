// === Chapter 1. Intro to React.JS  ===//

// App.js example
const name = "user123";
const element = <h1>Hello, {name}!</h1>;
ReactDOM.render(element, document.getElementById('root'));

// ===== JSX FOR UI ELEMENTS =====

// Greeting component with props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>
}

ReactDOM.render(<Greeting name="user123"/>, 
  document.getElementById('root'));

// ===== CREATING LISTS WITH JSX =====

// Example with courses array
const courses = ['BCA', 'BSc', 'MSc', 'MCA'];
const listItems = courses.map((courses) =>
  <li key={courses}>{courses}</li>
);

ReactDOM.render(<ul>{listItems}</ul>,
  document.getElementById('root'));



// ===== REUSABLE COMPONENT EXAMPLE =====

// Header component
import React from 'react';
import ReactDOM from 'react-dom';
import './App';
import './style.css';

ReactDOM.render(<App/>, document.getElementById('root'));

// App.js
import Header from 'component/header';
import Footer from 'component/footer';

function App() {
  return (
    <div>
      <Header/>
      <h1>Welcome to React Application</h1>
      <Footer/>
    </div>
  );
}

export default App;

// Header component
function header() {
  return <footer><p>©Website footer 2023</p></footer>
}

export default footer;