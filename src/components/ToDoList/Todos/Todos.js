import React from 'react';
import Todo from './Todo/Todo';
import classes from './stylesheets/Todos.css';

const todos = props => (
    <ul className={classes.Todos}>
        {props.todos.map((todo, index) => {
            return <Todo
                key={'todo' + index}
                index={index}
                todo={todo}
                deleteHandler={props.deleteHandler}
                completedHandler={props.completedHandler} />
        })}
    </ul>
);

export default todos;