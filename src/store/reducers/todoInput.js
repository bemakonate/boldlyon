import * as actionTypes from '../actionTypes';

const initialState = {
    todoInput: '',
    emptyInput: '',
    editing: false,
    editingIndex: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.INPUT_CHANGED):
            return {
                ...state,
                todoInput: action.inputEl.target.value,
            }
        case (actionTypes.EDIT_TODO):
            return {
                ...state,
                editing: true,
                todoInput: state.todos[action.index].task,
                editingIndex: action.index,
            }
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
        default:
            return state;
    }
}

export default reducer;