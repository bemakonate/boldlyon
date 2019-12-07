import * as actionTypes from './actionTypes';
import axios from '../axios-todos';

export const submitInput = (inputEl) => {
    inputEl.persist();
    return {
        type: actionTypes.INPUT_SUBMITTED,
        inputEl: inputEl,
    }
}

export const changeInput = (inputEl) => {
    inputEl.persist();
    return {
        type: actionTypes.INPUT_CHANGED,
        inputEl: inputEl,
    }
}

export const changeTodoCheck = (index) => {
    return {
        type: actionTypes.TODO_CHECK_CLICKED,
        index: index
    }
}

export const clickTodo = (index) => {
    return {
        type: actionTypes.TODO_CLICKED,
        index: index,
    }
}

export const editTodo = (index) => {
    return {
        type: actionTypes.EDIT_TODO,
        index: index,
    }
}

export const deleteTodo = (index) => {
    return {
        type: actionTypes.DELETE_TODO,
        index: index,
    }
}

export const emptyMsgReceived = () => {
    return {
        type: actionTypes.EMPTY_MSG_RECEIVED,
    }
}

export const cancelEditTodo = () => {
    return {
        type: actionTypes.CANCEL_EDIT_TODO
    }
}
export const fetchTodosPassed = (todos) => {
    return {
        type: actionTypes.FETCH_TODOS_PASSED,
        todos: todos,
    }
}

export const fetchTodosFailed = (err) => {
    return {
        type: actionTypes.FETCH_TODOS_FAILED,
        error: err,
    }
}

export const loadTodos = () => {
    return dispatch => {
        axios.get('/5dbed690b47c9423c8865727')
            .then(res => {
                //Transform the data into the format needed for the app
                const todos = res.data.tasks.map(task => {
                    return { task: task.title, isCompleted: task.isCompleted, clicked: false }
                })
                dispatch(fetchTodosPassed(todos))
            })
            .catch(err => {
                dispatch(fetchTodosFailed(err))
            })
    }
}

export const savedChangesSuccess = () => {
    return {
        type: actionTypes.SAVED_CHANGES_SUCCESS,
    }
}


export const saveChangedTodos = (todos) => {
    return dispatch => {
        const todosState = [...todos];
        const updatedTodos = todosState.map(todo => {
            return { title: todo.task, isCompleted: todo.isCompleted }
        })
        const data = { tasks: updatedTodos };

        axios.put('/5dbed690b47c9423c8865727', data)
            .then(res => {
                dispatch(savedChangesSuccess())
            })
            .catch(err => {
                dispatch(fetchTodosFailed(err))
            })
    }
}

export const todoSavedChanged = () => {
    return {
        type: actionTypes.TODO_SAVED_CHANGED,
    }
}