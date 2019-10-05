import React from 'react';
import classes from './stylesheets/Todo.css'

const todo = props => {
    //Add the default todo class, and if completed add the completed class also
    let todoClasses = [classes.Todo];
    if (props.todo.isCompleted) {
        todoClasses.push(classes.Completed);
    }

    const todoText = props.todo.task;
    const isTodoCompleted = props.todo.isCompleted;
    return (
        <li className={todoClasses.join(' ')}>

            <input
                className={classes.Checkbox}
                type='checkbox'
                onClick={() => props.completedHandler(props.index)}
                checked={isTodoCompleted} />

            {todoText}
            <span onClick={props.deleteHandler.bind(this, props.index)}>X</span>
        </li>
    );
}

export default todo;