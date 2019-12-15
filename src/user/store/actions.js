import * as actionTypes from './actionTypes';
import axios from 'axios';

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
export const authStart = () => {
    return { type: actionTypes.AUTH_START }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
    }
}

export const authFail = (error) => {
    console.log(error)
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}

export const auth = (isSignup, email, password, confirmPassword) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
        }
        let url = 'http://localhost:8080/auth/login';
        if (isSignup) {
            authData.confirmPassword = confirmPassword;
            url = 'http://localhost:8080/auth/signup'
        }

        axios.post(url, authData)
            .then(res => {
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("expirationDate", expirationDate);
                localStorage.setItem("userId", res.data.userId);

                dispatch(authSuccess(res.data.token, res.data.userId))
                dispatch(checkAuthTimeout(res.data.expiresIn))

            })
            .catch(err => {
                dispatch(authFail(err.response.data.error))
            })
    }
}

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userId");
    return { type: actionTypes.AUTH_LOGOUT }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId))
                dispatch(checkAuthTimeout(
                    (expirationDate.getTime() - new Date().getTime()) / 1000
                ))
            }

        }
    }
}