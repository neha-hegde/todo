import React from "react";

const TodoItems = (props) => {
    const {text,completed} = props.todo;
    return (
        <div className="todo-item">
            <input type="checkbox" checked={completed} />
            <span>{text}</span><br />
        </div>
    );
}

export default TodoItems;
            