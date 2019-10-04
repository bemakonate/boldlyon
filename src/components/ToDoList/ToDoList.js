import React, { Component } from 'react';
import ToDoInput from './ToDoInput/ToDoInput';
import Todos from './Todos/Todos';

class ToDoList extends Component {
    state = {
        todos: [],
    }

    inputChangedHandler = (event) => {
        if (event.keyCode === 13) {
            const updatedTodos = [...this.state.todos];
            updatedTodos.push(event.target.value);

            event.target.value = '';
            this.setState({ todos: updatedTodos })
        }
    }

    deleteTodoHandler = (index) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos.splice(index, 1);

        this.setState({ todos: updatedTodos });

    }
    render() {
        return (
            <div className='ToDoList'>
                <div>ToDo Header</div>
                <ToDoInput changed={this.inputChangedHandler} />
                <Todos todos={this.state.todos} deleteHandler={this.deleteTodoHandler} />
            </div>
        );
    }
}
export default ToDoList;