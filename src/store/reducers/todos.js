import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todosArr: [
        { task: "I am so nice at this shit", isCompleted: false, clicked: false },
        { task: "You are doing a good job", isCompleted: true, clicked: false }
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
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

        case (actionTypes.DELETE_TODO):
            return {
                ...state,
                todos: state.todos.filter((todo, index) => {
                    return action.index !== index;
                })
            }
        case (actionTypes.ADD_NEW_TODO):
            const newTodo = { task: action.inputEl.target.value, clicked: false, isCompleted: false }
            return {
                ...state,
                todos: state.todos.concat(),
            }
        default:
            return state;
    }
}

export default reducer;