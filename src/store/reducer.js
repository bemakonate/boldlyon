import * as actionTypes from './actionTypes';
const initialState = {
    todos: null,
    todoInput: '',
    editing: false,
    editingIndex: null,
    emptyInput: false,
    error: false,
    lastSavedTodos: null,
    savedChanges: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.INPUT_SUBMITTED):
            if (action.inputEl.keyCode !== 13) {
                return state;
            }
            if (action.inputEl.target.value.length <= 0) {
                return {
                    ...state,
                    emptyInput: true,
                }
            }
            if (state.editing) {
                const updatedTodos = [...state.todos];
                updatedTodos[state.editingIndex].task = action.inputEl.target.value;
                return {
                    ...state,
                    todos: updatedTodos,
                    editing: false,
                    editingIndex: null,
                    todoInput: '',
                    emptyInput: false,
                }
            }
            const newTodo = { task: action.inputEl.target.value, isCompleted: false, clicked: false }
            return {
                ...state,
                todos: state.todos.concat(newTodo),
                todoInput: '',
                emptyInput: false,
            }
        case (actionTypes.INPUT_CHANGED):
            return {
                ...state,
                todoInput: action.inputEl.target.value,
            }
        case (actionTypes.TODO_CHECK_CLICKED):
            const updatedTodos = [...state.todos];
            updatedTodos[action.index].isCompleted = !updatedTodos[action.index].isCompleted;
            return {
                ...state,
                todos: updatedTodos,
            }
        case (actionTypes.TODO_CLICKED):
            if (state.editing) {
                const updatedTodosArray = [...state.todos].map(todo => {
                    return { ...todo, clicked: false }
                })
                return {
                    ...state,
                    todos: updatedTodosArray,
                }
            }

            const updatedTodosArray = [...state.todos].map(todo => {
                return { ...todo, clicked: false }
            })
            updatedTodosArray[action.index].clicked = !state.todos[action.index].clicked;
            return {
                ...state,
                todos: updatedTodosArray,
            }
        case (actionTypes.EDIT_TODO):
            return {
                ...state,
                editing: true,
                todoInput: state.todos[action.index].task,
                editingIndex: action.index,
            }
        case (actionTypes.DELETE_TODO):
            return {
                ...state,
                todos: state.todos.filter((todo, index) => {
                    return action.index !== index;
                })
            }
        case (actionTypes.EMPTY_MSG_RECEIVED):
            return {
                ...state,
                emptyInput: false,
            }
        case (actionTypes.CANCEL_EDIT_TODO):
            return {
                ...state,
                editingIndex: null,
                editing: false,
                todoInput: '',
                emptyInput: false,
            }
        case (actionTypes.FETCH_TODOS_PASSED):
            return {
                ...state,
                todos: action.todos,
            }
        case (actionTypes.FETCH_TODOS_FAILED):
            return {
                ...state,
                error: true,
            }
        case (actionTypes.SAVED_CHANGES_SUCCESS):
            return {
                ...state,
                savedChanges: true,
            }
        default:
            return state
    }
}

export default reducer;