import React from 'react';
import LoginWindow from './LoginWindow';
import { connect } from 'react-redux';
import { onLoginThunk } from '../../redux/loginReducer';

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginData.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin(email, password) {
            dispatch(onLoginThunk(email, password))
        }
    }
}

export const LoginWindowContainer = connect(mapStateToProps, mapDispatchToProps)(LoginWindow)