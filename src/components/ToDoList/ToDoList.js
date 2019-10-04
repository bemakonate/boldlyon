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
            //Each todo should have the task text, and if it completed
            const newTodo = { task: event.target.value, isCompleted: false }

            updatedTodos.push(newTodo);//Add the new todo the array of todos

            event.target.value = ''; //Reset the element to an empty value
            this.setState({ todos: updatedTodos })
        }
    }

    deleteTodoHandler = (index) => {
        const updatedTodos = [...this.state.todos];
        let tasksCompleted = this.state.tasksCompleted;

        if (updatedTodos[index].isCompleted) {
            tasksCompleted -= 1;
        }

        updatedTodos.splice(index, 1);

        this.setState({
            todos: updatedTodos,
            tasksCompleted: tasksCompleted,
        });
    }

    todoCompletedHandler = (index) => {
        let sum = 0;
        const updatedTodos = [...this.state.todos];
        const taskCompleted = updatedTodos[index].isCompleted;//See if the task is already completed

        taskCompleted ? sum = -1 : sum = 1; //If clicked when completed then substract 1 from the tasksCompeleted
        updatedTodos[index].isCompleted = !taskCompleted; //When clicked toggle the state of task completion

        this.setState((prevState, props) => {
            return {
                tasksCompleted: prevState.tasksCompleted + sum,
                todos: updatedTodos,
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