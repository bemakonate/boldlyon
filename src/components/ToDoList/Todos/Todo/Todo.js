import React from 'react';
import classes from './stylesheets/Todo.css';
import PropTypes from 'prop-types';

const todo = props => {
    //Add the default todo class, and if completed add the completed class also
    let todoClasses = [classes.Todo];
    if (props.todo.isCompleted) {
        todoClasses.push(classes.Completed);
    }

    const todoText = props.todo.task;
    const isTodoCompleted = props.todo.isCompleted;
    const todoIndex = props.index;

    return (
        <li className={todoClasses.join(' ')}>
            <p className={classes.Index}>{todoIndex + 1}.</p>
            <label>
                <input
                    className={classes.Checkbox}
                    type='checkbox'
                    onChange={() => props.completedHandler(todoIndex)}
                    checked={isTodoCompleted} />

                <div className={classes.TodoText}>
                    <p>{todoText}</p>
                </div>
            </label>

            <span onClick={props.deleteHandler.bind(this, todoIndex)}>
                <i className="material-icons">delete_sweep</i>
            </span>

        </li>
    );
}

todo.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    completedHandler: PropTypes.func,
    deleteHandler: PropTypes.func,
}

export default todo;