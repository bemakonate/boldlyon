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
        this.props.onLoadTodos()
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
                        saveChanges={this.props.onSaveTodos}
                        editingTodo={this.props.editingTodo}
                        editingTodoIndex={this.props.editingTodoIndex}
                        isInputEmpty={this.props.emptyInput} />

                    <TodoInput
                        changed={this.props.onInputChanged}
                        inputValue={this.props.todoInput}
                        submitted={this.props.onInputSubmitted}
                        inputRef={this.inputElementRef} />

                    <div className={classes.Todos}>
                        <Todos
                            todos={this.props.todos}
                            clicked={this.props.onTodoClicked} />
                    </div>
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
        todos: state.todos,
        todoInput: state.todoInput,
        editingTodo: state.editing,
        editingTodoIndex: state.editingIndex,
        emptyInput: state.emptyInput,
        error: state.error,
        lastSavedTodos: state.lastSavedTodos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClicked: (index) => dispatch(actionCreators.clickTodo(index)),
        onLoadTodos: () => dispatch(actionCreators.loadTodos()),
        onSaveTodos: (todos) => dispatch(actionCreators.saveChangedTodos(todos)),
        onTodoSavedChanged: () => dispatch(actionCreators.todoSavedChanged())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(TodoList, axios));