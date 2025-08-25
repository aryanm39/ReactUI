import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <header className="header">
        <h1>Theme App</h1>
        <button onClick={toggle} className="toggle">
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </header>

      <main className="main">
        <h2>Current Theme:</h2>
        <p>{theme === "dark" ? "Dark" : "Light"}</p>
      </main>
    </div>
  );
};

export default App;
