import { updatedObj } from '../../shared/redux/utility';
import * as actionTypes from './actionTypes';

const initialStore = {
    currentModal: '',
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case (actionTypes.SHOW_AUTH_MODAL):
            return updatedObj(state, {
                currentModal: action.val,
            })
        case (actionTypes.CLOSE_AUTH_MODAL):
            return updatedObj(state, {
                currentModal: '',
            })
        default:
            return state;
    }
}

export default reducer;