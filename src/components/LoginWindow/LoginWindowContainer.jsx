import React from 'react';
import LoginWindow from './LoginWindow';
import { connect } from 'react-redux';
import { changeValueActionCreator, onLoginThunk } from '../../redux/loginReducer';

const mapStateToProps = (state) => {
    return {
        email: state.loginData.email,
        password: state.loginData.password,
        isAuth: state.loginData.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onValueChange(value) {
            dispatch(changeValueActionCreator(value))
        },
        onLogin(email, password) {
            dispatch(onLoginThunk(email, password))
        }
    }
}

export const LoginWindowContainer = connect(mapStateToProps, mapDispatchToProps)(LoginWindow)