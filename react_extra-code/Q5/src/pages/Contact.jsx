import React, { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setMsg("Name is required!");
    } else {
      setMsg("Thank you for contacting us, " + name + "!");
    }
  };
  return (
    <div>
      <h3>Contact Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p style={{ color: "green" }}>{msg}</p>
    </div>
  );
}
export default Contact;
