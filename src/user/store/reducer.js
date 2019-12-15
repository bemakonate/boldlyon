import { updatedObj } from '../../shared/redux/utility';
import * as actionTypes from './actionTypes';

const initialStore = {
    currentModal: '',
    loading: false,
    userId: null,
    token: null,
    error: null,
}

const authStart = (state, action) => {
    return updatedObj(state, {
        error: null,
        loading: true,
    })
}

const authSuccess = (state, action) => {
    return updatedObj(state, {
        token: action.idToken,
        userId: action.userId,
        loading: false,
        currentModal: '',
    })
}

const authFail = (state, action) => {
    return updatedObj(state, {
        error: action.error,
        loading: false,
    })
}

const authLogout = (state, action) => {
    return updatedObj(state, {
        token: null,
        userId: null,
    })
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case (actionTypes.SHOW_AUTH_MODAL):
            return updatedObj(state, {
                currentModal: action.val,
                error: false,
            })
        case (actionTypes.CLOSE_AUTH_MODAL):
            return updatedObj(state, {
                currentModal: '',
                error: false,
            })
        case (actionTypes.AUTH_START): return authStart(state, action)
        case (actionTypes.AUTH_SUCCESS): return authSuccess(state, action)
        case (actionTypes.AUTH_FAIL): return authFail(state, action)
        case (actionTypes.AUTH_LOGOUT): return authLogout(state, action)
        default:
            return state;
    }
}

export default reducer;