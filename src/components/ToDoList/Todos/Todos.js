import React, { Fragment } from 'react';
import Todo from './Todo/Todo';

const todos = props => (
    <Fragment>
        <ul>
            {props.todos.map((todo, index) => {
                return <Todo
                    key={'todo' + index}
                    index={index}
                    todoContent={todo}
                    deleteHandler={props.deleteHandler}
                    completed={props.completedHandler} />
            })}
        </ul>
    </Fragment>
);

export default todos;