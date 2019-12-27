import React, { Fragment } from 'react';

import classes from './stylesheets/TodoHeader.css';
import TodoMsg from '../../../../../UI/todoMsg/todoMsg';

import PropTypes from 'prop-types';

const todoHeader = props => {
    let editHeader = null;
    let emptyHeader = null;
    //If we are editing a todo
    if (props.editingTodo) {
        editHeader = (
            <TodoMsg
                styles={classes.EditHeader}
                message={`Continue editing todo #${props.editingTodoIndex + 1}... `}
                close={props.onCancelEditMode} />
        );
    }
    //If the todo sumbitted is empty
    if (props.isInputEmpty) {
        emptyHeader = (
            <TodoMsg
                styles={classes.EmptyHeader}
                message={!props.editingTodo ? 'Please enter something to submit' : 'Please replace the previous todo'}
                close={props.onEmptyMsgReceived} />
        );
    }
    const saveButtonClasses = ["material-icons", classes.SaveButton];
    if (!props.changesSaved) {
        saveButtonClasses.push(classes.ShowToSave);
    }

    //Determine how many tasks are completed and how much in total
    let todosCompleted = 0;
    let totalTasks = 0;
    props.todos.forEach(todo => {
        if (todo.isCompleted) {
            todosCompleted += 1;
        }
        totalTasks += 1;
    })

    return (
        <Fragment>
            <div className={classes.TodoHeader}>
                <div>
                    <h3 className={classes.TodoTitle}>bold lyon</h3>
                    <p className={classes.Tracker}>
                        Task(s) Completed: {todosCompleted}/{totalTasks}
                    </p>
                </div>

                {/* <button className={classes.SaveButton}>Save Changes</button> */}
                <i onClick={props.saveChanges} className={saveButtonClasses.join(' ')}>
                    save
                </i>
            </div>
            {editHeader}
            {emptyHeader}
        </Fragment>
    )
}

todoHeader.propTypes = {
    tasksCompleted: PropTypes.number,
    totalTasks: PropTypes.number,
}


export default todoHeader;