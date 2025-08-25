import React, { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !pass) {
      setMsg("All fields are required!");
    } else if (!email.includes("@")) {
      setMsg("Invalid email format!");
    } else {
      setMsg("Login Successful!");
    }
  };
  return (
    <div>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <p style={{ color: "red" }}>{msg}</p>
    </div>
  );
}
export default Login;
