import React from 'react';
import classes from './stylesheets/TodoHeader.css';
import PropTypes from 'prop-types';

const todoHeader = props => {
    return (
        <div className={classes.TodoHeader}>
            <h3 className={classes.TodoTitle}>Todo List App</h3>
            <p className={classes.Tracker}>
                Task(s) Completed: {props.tasksCompleted}/{props.totalTasks}
            </p>
        </div>
    )
}

todoHeader.propTypes = {
    tasksCompleted: PropTypes.number,
    totalTasks: PropTypes.number,
}


export default todoHeader;