import React from 'react';
import classes from './stylesheets/Todo.css'

const todo = props => {
    let todoClasses = null;
    if (props.todo.isCompleted) {
        todoClasses = classes.Completed;
    }
    return (
        <li className={todoClasses}>
            <input type='checkbox'
                onClick={() => props.completed(props.index)}
                checked={props.todo.isCompleted} />
            {props.todo.task}
            <span onClick={props.deleteHandler.bind(this, props.index)}>X</span>
        </li>
    );
}

export default todo;