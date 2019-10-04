import React from 'react';

const todo = props => (
    <li>
        <input type='checkbox' onChange={props.completed} />
        {props.todoContent}
        <span onClick={props.deleteHandler.bind(this, props.index)}>X</span>
    </li>
)

export default todo;