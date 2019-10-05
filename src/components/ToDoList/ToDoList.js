import React, { Component } from 'react';
import ToDoInput from './ToDoInput/ToDoInput';
import Todos from './Todos/Todos';
import classes from './stylesheets/ToDoList.css';

class ToDoList extends Component {
    state = {
        todos: [
            { task: 'Pick up sisters', isCompleted: false },
            { task: 'Start busines', isCompleted: false },
            { task: 'Go Home', isCompleted: false }
        ],
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
        updatedTodos.splice(index, 1);

        this.setState({ todos: updatedTodos }, () => {
            this.trackCompletedHandler();
        });
    }

    todoCompletedHandler = (index) => {
        const updatedTodos = [...this.state.todos];
        const taskCompleted = updatedTodos[index].isCompleted;//See if the task is already completed
        updatedTodos[index].isCompleted = !taskCompleted; //When clicked toggle the state of task completion

        this.setState({ todos: updatedTodos }, () => {
            this.trackCompletedHandler();
        });
    }

    trackCompletedHandler = () => {
        const updatedTodos = [...this.state.todos];
        let finished = 0;

        updatedTodos.forEach(todo => {
            if (todo.isCompleted) {
                finished += 1;
            }
        })
        this.setState({ tasksCompleted: finished })
    }

    componentDidMount() {
        this.trackCompletedHandler();
    }

    render() {
        return (
            <div className={classes.ToDoList}>
                <div className={classes.TodoHeader}>
                    <h3 className={classes.TodoTitle}>Todo List App</h3>
                    <p className={classes.Tracker}>Task Completed: {this.state.tasksCompleted}</p>

                </div>
                <ToDoInput changed={this.inputChangedHandler} />
                <div className={classes.Todos}>
                    <Todos
                        todos={this.state.todos}
                        deleteHandler={this.deleteTodoHandler}
                        completedHandler={this.todoCompletedHandler} />
                </div>

            </div>
        );
    }
}
export default ToDoList;