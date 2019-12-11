import * as actionTypes from './actionTypes';

export const showAuthModal = (authType) => {
    return {
        type: actionTypes.SHOW_AUTH_MODAL,
        val: authType,
    }
}
export const closeAuthModal = () => {
    return {
        type: actionTypes.CLOSE_AUTH_MODAL
    }
}