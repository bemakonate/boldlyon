import React, { Fragment } from 'react';
import classes from './stylesheets/TodoHeader.css';
import PropTypes from 'prop-types';

const todoHeader = props => {
    const closeIconClasses = ["material-icons", classes.CloseIcon].join(' ')
    let editHeader = null;
    let emptyHeader = null;
    if (props.editing) {
        editHeader = (
            <div className={classes.EditHeader}>
                <p>Continue editing todo #{props.editingIndex + 1}... </p>
                <i onClick={props.cancelEdit} className={closeIconClasses}>close</i>
            </div>
        );
    }
    if (props.empty) {
        emptyHeader = (
            <div className={classes.EmptyHeader}>
                <p>Please enter something to submit</p>
                <i onClick={props.emptyMsgReceived} className={closeIconClasses}>close</i>
            </div>
        );
    }
    return (
        <Fragment>
            <div className={classes.TodoHeader}>
                <h3 className={classes.TodoTitle}>Todo List App</h3>
                <p className={classes.Tracker}>
                    Task(s) Completed: {props.tasksCompleted}/{props.totalTasks}
                </p>
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