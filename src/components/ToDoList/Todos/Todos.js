import React from 'react';
import Todo from './Todo/Todo';
import classes from './stylesheets/Todos.css';
import PropTypes from 'prop-types'

const todos = props => {
    let todosClasses = [classes.Todos];
    if (props.editingState) {
        todosClasses = [classes.Todos, classes.DisableTodos];
    }

    return (
        <ul className={todosClasses.join(' ')}>
            {props.todos.map((todo, index) => {
                return <Todo
                    key={'todo' + index}
                    index={index}
                    todo={todo}
                    deleteHandler={props.deleteHandler}
                    completedHandler={props.completedHandler}
                    editingHandler={props.editingHandler}
                    editingState={props.editingState} />
            })}
        </ul>
    );
};

todos.propTypes = {
    todos: PropTypes.array,
    deleteHandler: PropTypes.func,
    completedHandler: PropTypes.func,
}

export default todos;