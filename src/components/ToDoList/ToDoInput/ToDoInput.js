import React, { Fragment } from 'react';

const todoListInput = props => (
    <Fragment>
        <input onKeyDown={props.changed} />
    </Fragment>
)
export default todoListInput;