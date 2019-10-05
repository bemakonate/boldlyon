import React from 'react';
import classes from './stylesheets/ToDoInput.css'

const todoListInput = props => (
    <div className={classes.ToDoInput}>
        <input onKeyDown={props.changed} placeholder='Enter a todo task' />
    </div>
)
export default todoListInput;