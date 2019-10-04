import React, { Component } from 'react';
import ToDoInput from './ToDoInput/ToDoInput';
import Todos from './Todos/Todos';
import classes from './ToDoList.css';

class ToDoList extends Component {
    state = {
        todos: [],
        tasksCompleted: 0,
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

    todoCompletedHandler = (event) => {
        let sum = 0;
        event.target.checked ? sum = 1 : sum = -1;

        this.setState((prevState, props) => {
            return {
                tasksCompleted: prevState.tasksCompleted + sum
            }
        })

    }

    render() {
        return (
            <div className={classes.ToDoList}>
                <div>ToDo Header</div>
                <ToDoInput changed={this.inputChangedHandler} />
                <p>Task Completed:{this.state.tasksCompleted}</p>
                <Todos
                    todos={this.state.todos}
                    deleteHandler={this.deleteTodoHandler}
                    completedHandler={this.todoCompletedHandler} />
            </div>
        );
    }
}
export default ToDoList;