import * as actionTypes from './actionTypes';
const initialState = {
    todos: [
        { task: "I am so nice at this shit", isCompleted: false, clicked: false },
        { task: "You are doing a good job", isCompleted: true, clicked: false }
    ],
    todoInput: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.INPUT_SUBMITTED):
            if (action.inputEl.keyCode !== 13) {
                return state;
            }
            const newTodo = { task: action.inputEl.target.value, isCompleted: false, clicked: false }
            return {
                ...state,
                todos: state.todos.concat(newTodo),
                todoInput: '',
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
        default:
            return state
    }
}

export default reducer;