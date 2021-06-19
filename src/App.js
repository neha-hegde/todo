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

  handleChange = (id) => {
    this.setState((prevState)=>{
      const updatedTodo = prevState.todo.map((todo)=>{
         if(todo.id===id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return {
        todo: updatedTodo
      }
    })
  }

  render(){
    const TodoComponents = this.state.todo.map((item) => {
      return (
        <TodoItems key={item.id} todo={item} handleChange={this.handleChange} />
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