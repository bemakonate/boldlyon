import React from 'react';

const todo = props => (
    <li>
        <input type='checkbox'
            onClick={() => props.completed(props.index)}
            checked={props.todo.isCompleted} />
        {props.todo.task}
        <span onClick={props.deleteHandler.bind(this, props.index)}>X</span>
    </li>
)

export default todo;