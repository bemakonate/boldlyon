import React, { useContext, useState } from 'react';
import classes from './stylesheets/Todo.css';
import PropTypes from 'prop-types';
import TodoContext from '../../../../context/TodoContext';
import Checkbox from '../../../../UI/Checkbox/Checkbox';

const todo = props => {
    const todoContext = useContext(TodoContext);
    //STATE
    const [buttonsState, setButtonsState] = useState({
        showChangeButtons: false,
    })

    const toggleChangeButtons = () => {
        if (!todoContext.editState) {
            setButtonsState({ showChangeButtons: !buttonsState.showChangeButtons })
        }
    }

    //Add the default todo class, and if completed add the completed class also
    let todoClasses = [classes.Todo];
    let changeButtonsClasses = [classes.ChangeButtons];

    //PROPS 
    const todoText = props.todo.task;
    const isTodoCompleted = props.todo.isCompleted;

    let todoOverlay = null;
    let completedFunc = todoContext.complete.bind(this, props.index);

    // //If we are editing a todo
    if (todoContext.editState) {
        todoClasses.push(classes.DisabledTodo);
        completedFunc = null;
    }

    if (buttonsState.showChangeButtons) {
        changeButtonsClasses.push(classes.SlideChangeButtons);
        todoOverlay = <div className={classes.Overlay} onClick={toggleChangeButtons}></div>;
    }

    function runEditButton() {
        todoContext.edit(props.index);
        toggleChangeButtons();
    }

    function runDeleteButton() {
        todoContext.delete(props.index);
        toggleChangeButtons();
    }
    return (
        <li className={todoClasses.join(' ')}>
            <p className={classes.Index}>{props.index + 1}.</p>
            <Checkbox checked={isTodoCompleted} changed={completedFunc} />

            <div className={classes.TodoText} onClick={toggleChangeButtons}>
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