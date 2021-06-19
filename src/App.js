import React, { Component } from "react";
import TodoItems from "./Components/TodoItems";
import TodoData from "./Components/TodoData";
import "./App.css";


class App extends Component{
  constructor(){
    super();
    this.state = {
      todo:TodoData
    }
  }

  render(){
    const TodoComponents = this.state.todo.map((item) => {
      return (
        <TodoItems key={item.id} todo={item} />
      );
    })

    return (
      <div>
       <h1 className="tc header">TODO LIST</h1>  
       <div className="todo-list">
         {TodoComponents}
       </div>
     </div>
   );
  }
}

export default App;