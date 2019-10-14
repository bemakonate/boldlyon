import React, { useContext } from 'react';
import classes from './stylesheets/Todo.css';
import PropTypes from 'prop-types';
import TodoContext from '../../../../context/TodoContext';

const todo = props => {
    const todoContext = useContext(TodoContext);
    //Add the default todo class, and if completed add the completed class also
    let todoClasses = [classes.Todo];
    if (props.todo.isCompleted) {
        todoClasses.push(classes.Completed);
    }
    //PROPS 
    const todoText = props.todo.task;
    const isTodoCompleted = props.todo.isCompleted;
    const todoIndex = props.index;

    //FUNCTIONS to run when clicked
    let editFunc = todoContext.edit.bind(this, props.index);
    let deleteFunc = todoContext.delete.bind(this, props.index);
    let completedFunc = todoContext.complete.bind(this, props.index);

    //If we are editing a todo
    if (todoContext.editState) {
        todoClasses.push(classes.DisabledTodo);
        editFunc = null;
        deleteFunc = null;
        completedFunc = null;
    }

    return (
        <li className={todoClasses.join(' ')}>
            <p className={classes.Index}>{todoIndex + 1}.</p>
            <label>
                <input
                    className={classes.Checkbox}
                    type='checkbox'
                    onChange={completedFunc}
                    checked={isTodoCompleted} />

                <div className={classes.TodoText}>
                    <p>{todoText}</p>
                </div>
            </label>

            <span className={classes.EditIcon} onClick={editFunc}>
                <i className="material-icons">edit</i>
            </span>

            <span className={classes.DeleteIcon} onClick={deleteFunc}>
                <i className="material-icons">delete_sweep</i>
            </span>

        </li>

    );
}

todo.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
}

export default todo;