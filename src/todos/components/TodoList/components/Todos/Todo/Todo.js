import React from 'react';
import { connect } from 'react-redux';
import classes from './stylesheets/Todo.css';
import * as actionCreators from '../../../../../store/actions';
import Checkbox from '../../../../../../UI/Checkbox/Checkbox';

const todo = props => {
    //Classes
    let todoClasses = [classes.Todo];
    let changeButtonsClasses = [classes.ChangeButtons];

    //PROPS 
    const todoText = props.todo.task;
    const isTodoCompleted = props.todo.isCompleted;
    const isTodoClicked = props.todo.clicked;

    let todoOverlay = null;
    let completedFunc = props.onTodoCheckClicked.bind(this, props.index);

    // //If we are editing a todo
    if (props.editState) {
        todoClasses.push(classes.DisabledTodo);
        completedFunc = null;
    }

    if (isTodoClicked) {
        changeButtonsClasses.push(classes.SlideChangeButtons);
        todoOverlay = <div className={classes.Overlay} onClick={props.toggleChangeButtons}></div>;
    }

    function runEditButton() {
        props.onEditTodo(props.index);
        props.toggleChangeButtons();
    }

    function runDeleteButton() {
        props.onDeleteTodo(props.index);
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
const mapStateToProps = state => {
    return {
        editState: state.todos.editing,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTodoCheckClicked: (index) => dispatch(actionCreators.changeTodoCheck(index)),
        onEditTodo: (index) => dispatch(actionCreators.editTodo(index)),
        onDeleteTodo: (index) => dispatch(actionCreators.deleteTodo(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todo);