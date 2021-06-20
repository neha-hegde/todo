import React from "react";

const TodoItems = (props) => {
    const {text,completed} = props.todo;

    const completedItems = {
        fontStyle : "italic",
        color : "grey",
        textDecoration : "line-through"
    }

    return (
        <div className="todo-item">
            <input onChange={()=>props.handleChange(props.todo.id)} type="checkbox" checked={completed} />
            <span style={props.todo.completed ? completedItems : null}>{text}</span><br />
        </div>
    );
}

export default TodoItems;
            