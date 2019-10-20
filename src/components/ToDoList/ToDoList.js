import React, { Component, Fragment } from 'react';
import ToDoInput from './ToDoInput/ToDoInput';
import Todos from './Todos/Todos';
import classes from './stylesheets/ToDoList.css';
import TodoHeader from './TodoHeader/TodoHeader';
import TodoContext from '../../context/TodoContext';
import axios from '../../axios-todos';

class ToDoList extends Component {
    state = {
        todos: null,
        tasksCompleted: 0,
        totalTasks: 0,
        todoInput: '',
        editing: false,
        editingIndex: null,
        empty: false,
    }
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
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
        this.setState({ todoInput: this.inputElementRef.current.value })
    }

    inputSubmitedHandler = (event) => {
        const enteredDefaultState = {
            empty: false,
            todoInput: '',
        }

        //If the input is entered
        if (event.keyCode === 13) {
            //If input is empty don't accept
            if (this.state.todoInput === '') {
                return this.setState({ empty: true })
            }

            //if editing find todo and change it
            if (this.state.editing) {
                const updatedTodos = [...this.state.todos];
                updatedTodos[this.state.editingIndex].task = this.state.todoInput;

                return this.setState({
                    todos: updatedTodos,
                    editing: false,
                    editingIndex: null,
                    ...enteredDefaultState,
                })
            }

            //Add a new todo 
            const updatedTodos = [...this.state.todos];
            const newTodo = { task: this.state.todoInput, isCompleted: false } //Each todo should have the task text, and if it completed

            updatedTodos.push(newTodo);


            this.setState({ todos: updatedTodos, ...enteredDefaultState }, () => {
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
            todoInput: this.state.todos[index].task,
            empty: false,
        }, () => {
            this.inputElementRef.current.focus();
        });
    }
    cancelEditingHandler = () => {
        this.setState({
            editing: false,
            todoInput: '',
            editingIndex: null,
            empty: false,
        })
    }
    emptyMsgReceivedHandler = () => {
        this.setState({ empty: false })
    }

    saveChangesHandler = () => {

    }
    componentDidMount() {
        axios.get('/5dab6d2d88361f4e61325063')
            .then(res => {
                return this.setState({ todos: res.data.todos });
            })
            .then(result => {
                this.inputElementRef.current.focus();
                this.trackCompletedHandler();
            })
    }

    render() {
        let todoSection = <div> Loading...</div>
        if (this.state.todos) {
            todoSection = (
                <div className={classes.ToDoList}>
                    <TodoHeader
                        tasksCompleted={this.state.tasksCompleted}
                        totalTasks={this.state.totalTasks}
                        editing={this.state.editing}
                        editingIndex={this.state.editingIndex}
                        cancelEdit={this.cancelEditingHandler}
                        empty={this.state.empty}
                        emptyMsgReceived={this.emptyMsgReceivedHandler}
                        saveChanges={this.saveChangesHandler} />

                    <ToDoInput
                        changed={this.inputChangedHandler}
                        inputValue={this.state.todoInput}
                        submitted={this.inputSubmitedHandler}
                        inputRef={this.inputElementRef} />

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
            )
        }

        return (
            <Fragment>
                {/* <Modal
                    show={this.state.showModal}
                    click={() => this.setState({ showModal: false })}> Lorem i</Modal> */}
                {todoSection}
            </Fragment>
        );
    }
}
export default ToDoList;