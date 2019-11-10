import React from 'react';
import Todo from './Todo/Todo';
import classes from './stylesheets/Todos.css';

const todos = props => {
    return (
        <ul className={classes.Todos}>
            {props.todos.map((todo, index) => {
                return <Todo
                    key={'todo' + index}
                    index={index}
                    todo={todo}
                    toggleChangeButtons={() => props.clicked(index)} />
            })}
        </ul>
    );
};

export default todos;