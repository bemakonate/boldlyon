import React, { Fragment } from 'react';
import classes from './stylesheets/TodoHeader.css';
import TodoMsg from '../../../UI/todoMsg/todoMsg';

import PropTypes from 'prop-types';

const todoHeader = props => {
    let editHeader = null;
    let emptyHeader = null;
    //If we are editing a todo
    if (props.editing) {
        editHeader = (
            <TodoMsg
                styles={classes.EditHeader}
                message={`Continue editing todo #${props.editingIndex + 1}... `}
                close={props.cancelEdit} />
        );
    }
    //If the todo sumbitted is empty
    if (props.empty) {
        emptyHeader = (
            <TodoMsg
                styles={classes.EmptyHeader}
                message={!props.editing ? 'Please enter something to submit' : 'Please replace the previous todo'}
                close={props.emptyMsgReceived} />
        );
    }

    return (
        <Fragment>
            <div className={classes.TodoHeader}>
                <div>
                    <h3 className={classes.TodoTitle}>Todo List App</h3>
                    <p className={classes.Tracker}>
                        Task(s) Completed: {props.tasksCompleted}/{props.totalTasks}
                    </p>
                </div>

                <button onClick={props.saveChanges} className={classes.SaveButton}>Save Changes</button>
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