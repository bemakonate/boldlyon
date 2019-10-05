import React from 'react';
import classes from './stylesheets/ToDoInput.css'

const todoListInput = props => (
    <div className={classes.ToDoInput}>
        <input onKeyDown={props.changed} />
    </div>
)
export default todoListInput;