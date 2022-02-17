import { loginAPI } from "../API/api";

const ON_LOGIN = 'login/ON_LOGIN';
const ON_LOGOUT = 'login/ON_LOGOUT';
const LOGIN_ERROR = 'login/LOGIN_ERROR';

const initialState = {
    isAuth: Number(localStorage.getItem('VReacte')) ? true : false,
    loggedID: localStorage.getItem('VReacte') ? localStorage.getItem('VReacte') : "",
    isLoginError: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_LOGIN: {
            console.log(state.isAuth, state.loggedID)
            return { ...state, isAuth: true, isLoginError: false }
        }
        case ON_LOGOUT: {
            return { ...state, isAuth: false }
        }
        case LOGIN_ERROR: {
            return { ...state, isLoginError: true }
        }
        default: return state
    }
    
}

export default loginReducer;

export const onLoginActionCreator = () => ({ type: ON_LOGIN });
export const onLogOutActionCreator = () => ({ type: ON_LOGOUT });
export const loginErrorActionCreator = () => ({ type: LOGIN_ERROR });

export const onLoginThunk = (email, password) => {
    return async (dispatch) => {
        const responce = await loginAPI.checkEmail(email)
        if (responce.data.length != 0) {
            if (password == responce.data[0].password) {
                localStorage.setItem('VReacte', responce.data[0].id);
                dispatch(onLoginActionCreator());
            }
            else {
                dispatch(loginErrorActionCreator());
            }
        }
        else {
            dispatch(loginErrorActionCreator());
        }
    }
}