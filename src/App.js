import React from "react";
import TodoItems from "./Components/TodoItems";
import TodoData from "./Components/TodoData";
import "./App.css";

const TodoComponents = TodoData.map((item) => {
  return (
    <TodoItems key={item.id} todo={item} />
  );
})

const App = () => {
  return (
    <div>
      <h1 className="tc header">TODO LIST</h1>  
      <div className="todo-list">
        {TodoComponents}
      </div>
    </div>
  );
}

export default App;