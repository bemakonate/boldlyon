import React, { Component } from 'react';
import ToDoInput from './ToDoInput/ToDoInput';
import Todos from './Todos/Todos';
import classes from './stylesheets/ToDoList.css';
import TodoHeader from './TodoHeader/TodoHeader';
import TodoContext from '../../context/TodoContext';

class ToDoList extends Component {
    state = {
        todos: [
            { task: 'Pick up sisters', isCompleted: true },
            { task: 'Start busines', isCompleted: false },
        ],
        tasksCompleted: 0,
        totalTasks: 0,
        todoInput: '',
        editing: false,
        editingIndex: null,
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

    //INPUT handlers
    inputChangedHandler = (event) => {
        this.setState({ todoInput: event.target.value })
    }

    inputSubmitedHandler = (event) => {
        if (event.keyCode === 13 && this.state.editing) {
            const updatedTodos = [...this.state.todos];
            updatedTodos[this.state.editingIndex].task = this.state.todoInput;

            this.setState({
                editing: false,
                todoInput: '',
                todos: updatedTodos,
                editingIndex: null,
            })
        } else if (event.keyCode === 13) {
            const updatedTodos = [...this.state.todos];
            //Each todo should have the task text, and if it completed
            const newTodo = { task: this.state.todoInput, isCompleted: false }

            updatedTodos.push(newTodo);//Add the new todo the array of todos

            //Reset the element to an empty value
            this.setState({ todos: updatedTodos, todoInput: '' }, () => {
                this.trackCompletedHandler();
            })
        }

    }

    //TODOS handlers
    todoCompletedHandler = (index) => {
        const updatedTodos = [...this.state.todos];
        const taskCompleted = updatedTodos[index].isCompleted;//See if the task is already completed
        updatedTodos[index].isCompleted = !taskCompleted; //When clicked toggle the state of task completion

        this.setState({ todos: updatedTodos }, () => {
            this.trackCompletedHandler();
        });
    }

    deleteTodoHandler = (index) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos.splice(index, 1);

        this.setState({ todos: updatedTodos }, () => {
            this.trackCompletedHandler();
        });
    }

    editTodoHandler = (index) => {
        this.setState({
            editing: true,
            editingIndex: index,
            todoInput: this.state.todos[index].task
        });
    }
    cancelEditingHandler = () => {
        this.setState({
            editing: false,
            editingIndex: null,
            todoInput: '',
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
                    totalTasks={this.state.totalTasks}
                    editing={this.state.editing}
                    editingIndex={this.state.editingIndex}
                    cancelEdit={this.cancelEditingHandler} />

                <ToDoInput
                    changed={this.inputChangedHandler}
                    inputValue={this.state.todoInput}
                    submitted={this.inputSubmitedHandler} />

                <TodoContext.Provider value={{
                    delete: this.deleteTodoHandler,
                    edit: this.editTodoHandler,
                    complete: this.todoCompletedHandler,
                    editState: this.state.editing,
                }}>
                    <div className={classes.Todos}>
                        <Todos todos={this.state.todos} />
                    </div>
                </TodoContext.Provider>

            </div>
        );
    }
}
export default ToDoList;