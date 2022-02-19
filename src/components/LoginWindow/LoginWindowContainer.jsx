import React from 'react';
import LoginWindow from './LoginWindow';
import { connect } from 'react-redux';
import { onLoginThunk } from '../../redux/loginReducer';

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginData.isAuth,
        isLoginError: state.loginData.isLoginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin(email, password, rememberMe) {
            dispatch(onLoginThunk(email, password, rememberMe))
        }
    }
}

export const LoginWindowContainer = connect(mapStateToProps, mapDispatchToProps)(LoginWindow)