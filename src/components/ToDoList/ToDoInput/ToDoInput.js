import React from 'react';
import { connect } from 'react-redux';

import classes from './stylesheets/TodoInput.css';
import * as actionCreators from '../../../store/actions';

const todoListInput = props => (
    <div className={classes.TodoInput}>
        <input
            onChange={(event) => props.onInputChanged(event)}
            onKeyDown={(event) => props.onInputSubmitted(event)}
            placeholder='Enter a todo task'
            value={props.inputValue}
            ref={props.inputRef} />
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        onInputSubmitted: (inputEl) => dispatch(actionCreators.submitInput(inputEl)),
        onInputChanged: (inputEl) => dispatch(actionCreators.changeInput(inputEl)),
    }
}
export default connect(null, mapDispatchToProps)(todoListInput);