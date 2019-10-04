import React, { Fragment } from 'react';

const todos = props => (
    <Fragment>
        <ul>
            {props.todos.map((todo, index) => {
                return (
                    <li key={'todo' + index}>
                        {todo}
                        <span onClick={props.deleteHandler.bind(this, index)}>X</span>
                    </li>
                );
            })}
        </ul>
    </Fragment>
);

export default todos;