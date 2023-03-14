import React from "react";
import Card from '../Card';
import './CardList.scss';

const CardList = (props) => {
    const { list, onClose, onEdit, onUndo, onDone, onEditText } = props;

    const todoList = list && list.length > 0 && list.map(item => {
        return (
            <Card todoItem={item} key={item.id} onClose={onClose} onEdit={onEdit} onUndo={onUndo} onDone={onDone} onEditText={onEditText} />
        )
    });

    return (
        <div className="todo__cards">
            {todoList}
        </div>
    )
}

export default CardList;