import * as actionTypes from './actionTypes';

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