import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './stylesheets/TodoList.css';
import TodoInput from './components/TodoInput/TodoInput';
import Todos from './components/Todos/Todos';
import TodoHeader from './components/TodoHeader/TodoHeader';

import axios from '../../../axios-todos';
import WithErrorHandler from '../../../shared/components/withErrorHandler/withErrorHandler';
import Spinner from '../../../UI/Spinner/Spinner';
import * as actionCreators from '../../store/actions';

class TodoList extends Component {
    state = {
        loading: false,
        savedChanges: true,
    }

    componentDidMount() {
        this.props.onLoadTodos(this.props.userId, this.props.token)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.todos !== this.props.todos) {
            if (this.props.todos !== this.props.lastSavedTodos) {
                this.props.onTodoSavedChanged();
            }
        }
    }
    render() {
        let todoSection = this.props.error ? <p>Resource can't be loaded</p> : <Spinner />;
        if (this.props.todos) {
            todoSection = (
                <div className={classes.TodoList}>
                    <TodoHeader
                        saveChanges={() => this.props.onSaveTodos(this.props.userId, this.props.token, this.props.todos)}
                        editingTodo={this.props.editingTodo}
                        editingTodoIndex={this.props.editingTodoIndex}
                        isInputEmpty={this.props.emptyInput} />

                    <TodoInput
                        changed={this.props.onInputChanged}
                        inputValue={this.props.todoInput}
                        submitted={this.props.onInputSubmitted}
                        inputRef={this.inputElementRef} />

                    {this.props.todos.length > 0 ?
                        <div className={classes.Todos}>
                            <Todos
                                todos={this.props.todos}
                                clicked={this.props.onTodoClicked} />
                        </div> : <p className={classes.AddNewTodo}>Enter a new todo!!</p>}
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

const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
        todoInput: state.todos.todoInput,
        editingTodo: state.todos.editing,
        editingTodoIndex: state.todos.editingIndex,
        emptyInput: state.todos.emptyInput,
        error: state.todos.error,
        lastSavedTodos: state.todos.lastSavedTodos,
        isAuth: state.auth.token !== null,
        userId: state.auth.userId,
        token: state.auth.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClicked: (index) => dispatch(actionCreators.clickTodo(index)),
        onLoadTodos: (userId, token) => dispatch(actionCreators.loadTodos(userId, token)),
        onSaveTodos: (userId, token, todos) => dispatch(actionCreators.saveChangedTodos(userId, token, todos)),
        onTodoSavedChanged: () => dispatch(actionCreators.todoSavedChanged())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(TodoList, axios));