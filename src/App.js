import React from "react";
import TodoItems from "./Components/TodoItems";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1 className="tc header">TODO LIST</h1>  
      <div className="todo-list">
        <TodoItems />
        <TodoItems />
        <TodoItems />
        <TodoItems />
      </div>
    </div>
  );
}

export default App;