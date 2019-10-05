import React, { Fragment } from 'react';
import Todo from './Todo/Todo';
import classes from './Todos.css'

const todos = props => (
    <Fragment>
        <ul className={classes.Todos}>
            {props.todos.map((todo, index) => {
                return <Todo
                    key={'todo' + index}
                    index={index}
                    todo={todo}
                    deleteHandler={props.deleteHandler}
                    completed={props.completedHandler} />
            })}
        </ul>
    </Fragment>
);

export default todos;