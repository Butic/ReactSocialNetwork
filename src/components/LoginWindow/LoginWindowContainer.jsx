import React from 'react';
import LoginWindow from './LoginWindow';
import axios from "axios";
import { connect } from 'react-redux';
import { changeValueActionCreator } from '../../redux/loginReducer';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        email: state.loginData.email,
        password: state.loginData.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onValueChange(value) {
            dispatch(changeValueActionCreator(value))
        },
        onLogin(email, password) {
            axios.get(`http://localhost:8000/users/?email=${email}`)
                .then((responce) => {
                    if (responce.data.length!=0) {
                        if(password==responce.data[0].password){
                            localStorage.setItem('VReacte', responce.data[0].id);
                        }
                        else{
                            alert('Password is incorrect')
                        }
                    }
                    else{
                        alert('Current e-mail not exists')
                    }
                })
        }
    }
}

export const LoginWindowContainer = connect(mapStateToProps, mapDispatchToProps)(LoginWindow)