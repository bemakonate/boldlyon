import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import classes from './stylesheets/TodosBuilder.css';

class TodosBuilder extends Component {
    render() {
        return (
            <div className={classes.TodosBuilder}>
                <main>
                    <TodoList />
                </main>
            </div>
        );
    }
}

export default TodosBuilder;