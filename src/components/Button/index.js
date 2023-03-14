import React from "react";
import './Button.scss';

const Button = (props) => {
    const { onAddTodo } = props;

    return (
        <button type="button" className="todo_button" onClick={() => onAddTodo()}>Add</button>
    )
}

export default Button;