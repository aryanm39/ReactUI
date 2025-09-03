import "./App.css";
//import { useState } from 'react'

function App() {
    //  <div style={{float : 'left'}}>
    //     <img style={{width : '200px', height : '200px', marginRight : '40px'}} 
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    },
    profileImage: {
      width: '200px',
      height: '200px',
      marginRight: '40px'
    },
    name: {
      marginBottom: '15px'
    }
  }

  return (
    <div style={styles.container}>
      <img 
        style={styles.profileImage}
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Aryan Medhe profile" 
      />
      
      <div>
        <h3 style={styles.name}>
          Name: Aryan Medhe
        </h3>
        
        <p>
          As a passionate Computer Science graduate (BSc + MSc),
          I thrive on solving real-world problems through code and logical thinking. 
          Currently diving deep into Java and Data Structures & Algorithms (DSA), 
          I'm focused on strengthening my foundations to crack coding interviews and 
          build efficient, scalable solutions.
          <br /><br />
          I believe in continuous learning and enjoy turning challenges into opportunities. 
          Whether it's understanding core CS concepts, writing clean code, or 
          collaborating on meaningful projects, I strive to grow every single day.
        </p>
      </div>
    </div>
  )
}

export default App