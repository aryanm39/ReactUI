import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';
import "./App.css";

function App() {
  return (
    <div>
      <h1>User Directory</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;