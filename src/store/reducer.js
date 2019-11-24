import * as actionTypes from './actionTypes';
const initialState = {
    todos: [
        { task: "I am so nice at this shit", isCompleted: false, clicked: false },
        { task: "You are doing a good job", isCompleted: true, clicked: false }
    ],
    todoInput: '',
    editing: false,
    editingIndex: null,
    emptyInput: false,
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
        default:
            return state
    }
}

export default reducer;