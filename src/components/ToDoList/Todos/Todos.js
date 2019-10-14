import React from 'react';
import Todo from './Todo/Todo';
import classes from './stylesheets/Todos.css';
import PropTypes from 'prop-types';

const todos = props => {

    return (
        <ul className={classes.Todos}>
            {props.todos.map((todo, index) => {
                return <Todo
                    key={'todo' + index}
                    index={index}
                    todo={todo} />
            })}
        </ul>
    );
};

todos.propTypes = {
    todos: PropTypes.array,
}

export default todos;