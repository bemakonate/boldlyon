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
            <p className={classes.Index}>{props.index + 1}.</p>
            <label>
                <input
                    className={classes.Checkbox}
                    type='checkbox'
                    onChange={() => props.completedHandler(props.index)}
                    checked={isTodoCompleted} />

                <div className={classes.TodoText}>
                    <p>{todoText}</p>
                </div>
            </label>

            <span onClick={props.deleteHandler.bind(this, props.index)}>
                <i className="material-icons">delete_sweep</i>
            </span>

        </li>
    );
}

export default todo;