import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetching data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        // Sort by name (ascending)
        const sorted = result.sort((a, b) => a.name.localeCompare(b.name));
        setData(sorted);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h3>User List (Sorted by Name)</h3>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;