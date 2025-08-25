import React, { useReducer, useState } from "react";
import './App.css'

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput(""); // clear input
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>To-Do List</h1>

        {/* Input + button */}
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        {/* Todo list */}
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button
                className="delete-btn"
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
