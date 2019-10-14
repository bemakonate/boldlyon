import React from 'react';
import classes from './stylesheets/ToDoInput.css';
import PropTypes from 'prop-types';

const todoListInput = props => (
    <div className={classes.ToDoInput}>
        <input
            onChange={props.changed}
            onKeyDown={props.submitted}
            placeholder='Enter a todo task'
            value={props.inputValue ? props.inputValue : ''} />
    </div>
)

todoListInput.propTypes = {
    changed: PropTypes.func,
    submitted: PropTypes.func,
    inputValue: PropTypes.string,
}
export default todoListInput;