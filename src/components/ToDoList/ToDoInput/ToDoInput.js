import React from 'react';
import classes from './stylesheets/ToDoInput.css'

const todoListInput = props => (
    <div className={classes.ToDoInput}>
        <input
            onChange={props.changed}
            onKeyDown={props.submitted}
            placeholder='Enter a todo task'
            value={props.inputValue} />
    </div>
)
export default todoListInput;