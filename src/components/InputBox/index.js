import React from "react";
import './InputBox.scss';

const InputBox = (props) => {
    const { className, onAddTodo, val } = props;

    const handleChange = (e) => {
        onAddTodo(e.target.value);
    }

    return (
        <div className={`input__container ${className}`}>
            <label htmlFor="texyfield">Add Todo</label>
            <input type="text" id="texyfield" value={val} placeholder="Add new todo" onChange={(e) => handleChange(e) }/>
        </div>
    )
}

export default InputBox;