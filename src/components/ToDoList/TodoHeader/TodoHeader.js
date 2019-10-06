import React from 'react';
import classes from './stylesheets/TodoHeader.css';

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

export default todoHeader;