import React from 'react';
import classes from './stylesheets/TodoInput.css';
import PropTypes from 'prop-types';

const todoListInput = props => (
    <div className={classes.TodoInput}>
        <input
            onChange={(event) => props.changed(event)}
            onKeyDown={(event) => props.submitted(event)}
            placeholder='Enter a todo task'
            value={props.inputValue}
            ref={props.inputRef} />
    </div>
)

todoListInput.propTypes = {
    changed: PropTypes.func,
    submitted: PropTypes.func,
    inputValue: PropTypes.string,
}
export default todoListInput;