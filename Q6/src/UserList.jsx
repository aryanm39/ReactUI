import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
