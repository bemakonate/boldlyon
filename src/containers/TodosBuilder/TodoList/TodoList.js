import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './stylesheets/TodoList.css';
import TodoInput from '../../../components/TodoList/TodoInput/TodoInput';
import Todos from '../../../components/TodoList/Todos/Todos';
import TodoHeader from '../../../components/TodoList/TodoHeader/TodoHeader';
import TodoContext from '../../../context/TodoContext';
import axios from '../../../axios-todos';
import WithErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../../UI/Spinner/Spinner';
import * as actionCreators from '../../../store/actions';

class TodoList extends Component {
    state = {
        error: false,
        loading: false,
        savedChanges: true,
    }

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
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
                        state={{ ...this.state }}
                        cancelEdit={this.props.onCancelEditTodo}
                        emptyMsgReceived={this.props.onEmptyMsgReceived}
                        saveChanges={this.props.onSaveTodos}
                        editingTodo={this.props.editingTodo}
                        editingTodoIndex={this.props.editingTodoIndex}
                        isInputEmpty={this.props.emptyInput} />

                    <TodoInput
                        changed={this.props.onInputChanged}
                        inputValue={this.props.todoInput}
                        submitted={this.props.onInputSubmitted}
                        inputRef={this.inputElementRef} />

                    <TodoContext.Provider value={{
                        delete: this.props.onDeleteTodo,
                        edit: this.props.onEditTodo,
                        complete: this.props.onTodoCheckClicked,
                        editState: this.props.editingTodo,
                    }}>
                        <div className={classes.Todos}>
                            <Todos
                                todos={this.props.todos}
                                clicked={this.props.onTodoClicked} />
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
        onInputSubmitted: (inputEl) => dispatch(actionCreators.submitInput(inputEl)),
        onInputChanged: (inputEl) => dispatch(actionCreators.changeInput(inputEl)),
        onTodoCheckClicked: (index) => dispatch(actionCreators.changeTodoCheck(index)),
        onTodoClicked: (index) => dispatch(actionCreators.clickTodo(index)),
        onEditTodo: (index) => dispatch(actionCreators.editTodo(index)),
        onDeleteTodo: (index) => dispatch(actionCreators.deleteTodo(index)),
        onEmptyMsgReceived: () => dispatch(actionCreators.emptyMsgReceived()),
        onCancelEditTodo: () => dispatch(actionCreators.cancelEditTodo()),
        onLoadTodos: () => dispatch(actionCreators.loadTodos()),
        onSaveTodos: (todos) => dispatch(actionCreators.saveChangedTodos(todos)),
        onTodoSavedChanged: () => dispatch(actionCreators.todoSavedChanged())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(TodoList, axios));