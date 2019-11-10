import React, { useContext } from 'react';
import classes from './stylesheets/Todo.css';
import PropTypes from 'prop-types';
import TodoContext from '../../../../context/TodoContext';
import Checkbox from '../../../../UI/Checkbox/Checkbox';

const todo = props => {
    const todoContext = useContext(TodoContext);
    //Classes
    let todoClasses = [classes.Todo];
    let changeButtonsClasses = [classes.ChangeButtons];

    //PROPS 
    const todoText = props.todo.task;
    const isTodoCompleted = props.todo.isCompleted;
    const isTodoClicked = props.todo.clicked;
    let todoOverlay = null;
    let completedFunc = todoContext.complete.bind(this, props.index);

    // //If we are editing a todo
    if (todoContext.editState) {
        todoClasses.push(classes.DisabledTodo);
        completedFunc = null;
    }

    if (isTodoClicked) {
        changeButtonsClasses.push(classes.SlideChangeButtons);
        todoOverlay = <div className={classes.Overlay} onClick={props.toggleChangeButtons}></div>;
    }

    function runEditButton() {
        todoContext.edit(props.index);
        props.toggleChangeButtons();
    }

    function runDeleteButton() {
        todoContext.delete(props.index);
    }

    return (
        <li className={todoClasses.join(' ')}>
            <p className={classes.Index}>{props.index + 1}.</p>
            <Checkbox checked={isTodoCompleted} changed={completedFunc} />

            <div className={classes.TodoText} onClick={props.toggleChangeButtons}>
                <p>{todoText}</p>
            </div>
            {todoOverlay}
            <div className={changeButtonsClasses.join(' ')}>
                <span className={classes.EditIcon} onClick={runEditButton}>
                    <i className="material-icons">edit</i>
                </span>

                <span className={classes.DeleteIcon} onClick={runDeleteButton}>
                    <i className="material-icons">delete_sweep</i>
                </span>
            </div>

        </li>

    );
}

todo.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
}

export default todo;