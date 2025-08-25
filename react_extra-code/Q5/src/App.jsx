import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admission from "./pages/Admission";
import Student from "./pages/Student";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h2>Simple React Routing with Forms</h2>
        <nav>
          <Link to="/admission">Admission</Link> |{" "}
          <Link to="/student">Student</Link> | <Link to="/login">Login</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/admission" element={<Admission />} />
          <Route path="/student" element={<Student />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
