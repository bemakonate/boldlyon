import React, { Component } from 'react';
import ToDoInput from './ToDoInput/ToDoInput';
import Todos from './Todos/Todos';
import classes from './stylesheets/ToDoList.css';
import TodoHeader from './TodoHeader/TodoHeader';

class ToDoList extends Component {
    state = {
        todos: [
            { task: 'Pick up sisters', isCompleted: true },
            { task: 'Start busines', isCompleted: false },
        ],
        tasksCompleted: 0,
        totalTasks: 0,
    }

    inputChangedHandler = (event) => {
        if (event.keyCode === 13) {
            const updatedTodos = [...this.state.todos];
            //Each todo should have the task text, and if it completed
            const newTodo = { task: event.target.value, isCompleted: false }

            updatedTodos.push(newTodo);//Add the new todo the array of todos

            event.target.value = ''; //Reset the element to an empty value
            this.setState({ todos: updatedTodos }, () => {
                this.trackCompletedHandler();
            })
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
        let totalTasks = 0;

        updatedTodos.forEach(todo => {
            if (todo.isCompleted) {
                finished += 1;
            }
            totalTasks += 1;
        })

        this.setState({
            tasksCompleted: finished,
            totalTasks: totalTasks
        })
    }

    componentDidMount() {
        this.trackCompletedHandler();
    }
    render() {
        return (
            <div className={classes.ToDoList}>
                <TodoHeader
                    tasksCompleted={this.state.tasksCompleted}
                    totalTasks={this.state.totalTasks} />

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