import React, { Component, Fragment } from 'react';
import classes from './stylesheets/TodoList.css';
import TodoInput from '../../components/TodoList/TodoInput/TodoInput';
import Todos from '../../components/TodoList/Todos/Todos';
import TodoHeader from '../../components/TodoList/TodoHeader/TodoHeader';
import TodoContext from '../../context/TodoContext';
import axios from '../../axios-todos';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../UI/Spinner/Spinner';

class TodoList extends Component {
    state = {
        todos: null,
        tasksCompleted: 0,
        totalTasks: 0,
        todoInput: '',
        editing: false,
        editingIndex: null,
        empty: false,
        error: false,
        loading: false,
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
        const enteredDefaultStates = {
            empty: false,
            todoInput: '',
        }

        //If the input is entered
        if (event.keyCode === 13) {
            //If input is empty don't accept
            if (this.state.todoInput === '') {
                return this.setState({ empty: true })
            }

            //if editing, find the todo and change it
            if (this.state.editing) {
                const updatedTodos = [...this.state.todos];
                updatedTodos[this.state.editingIndex].task = this.state.todoInput;

                return this.setState({
                    todos: updatedTodos,
                    editing: false,
                    editingIndex: null,
                    ...enteredDefaultStates,
                })
            }
            //Add a new todo 
            const updatedTodos = [...this.state.todos];
            const newTodo = { task: this.state.todoInput, isCompleted: false } //Each todo should have the task text, and if it's completed

            updatedTodos.push(newTodo);
            this.setState({ todos: updatedTodos, ...enteredDefaultStates }, () => {
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
        this.setState({ loading: true })
        //Transform the data to the wanted format
        const todosState = [...this.state.todos];
        const updatedTodos = todosState.map(todo => {
            return { title: todo.task, isCompleted: todo.isCompleted }
        })
        const data = { tasks: updatedTodos };

        axios.put('/5dbed690b47c9423c8865727', data)
            .then(res => {
                this.setState({ loading: false })
            })
            .catch(err => {
                this.setState({ error: true })
            })
    }

    componentDidMount() {
        axios.get('/5dbed690b47c9423c8865727')
            .then(res => {
                //Transform the data into the format needed for the app
                const todos = res.data.tasks.map(task => {
                    return { task: task.title, isCompleted: task.isCompleted }
                })

                return this.setState({ todos: todos, lastSavedTodos: todos });
            })
            .then(result => {
                this.inputElementRef.current.focus();
                this.trackCompletedHandler();
            })
            .catch(err => {
                this.setState({ error: true })
            })
    }


    render() {
        let todoSection = this.state.error ? <p>Resource can't be loaded</p> : <Spinner />;
        if (this.state.todos) {
            todoSection = (
                <div className={classes.TodoList}>
                    <TodoHeader
                        state={{ ...this.state }}
                        cancelEdit={this.cancelEditingHandler}
                        emptyMsgReceived={this.emptyMsgReceivedHandler}
                        saveChanges={this.saveChangesHandler} />

                    <TodoInput
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
                {this.state.loading ? <Spinner /> : null}
                {todoSection}
            </Fragment>
        );
    }
}
export default WithErrorHandler(TodoList, axios);