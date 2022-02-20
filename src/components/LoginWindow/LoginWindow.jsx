import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../validators/validators';
import { Input } from '../formControls/formControls';
import classes from './LoginWindow.module.css';

const LoginWindow = ({isAuth, isLoginError, onLogin}) => {

    const [rememberMe, setRememberMe] = useState(false);
    const changeRememberMe=()=>{
        setRememberMe(!rememberMe)
    }
    const sendLoginData = (value) => {
        onLogin(value.email, value.password, rememberMe);
        value.email="";
        value.password="";
    }

    if (isAuth) return <Redirect to={"/profile"} />
    return (
        <div className={classes.LoginWindow__background}>
            <div className={classes.LoginWindow__container}>
                <div className={!isLoginError?classes.LoginWindow:classes.LoginWindow+" "+classes.LoginWindow_error}>
                    <h1 className={classes.LoginWindow__header}>VReacte</h1>
                    <h2 className={classes.LoginWindow__description}>Login Window</h2>
                    <span className={classes.LoginWindow__error}>{isLoginError&&"E-mail or Password is Incorrect"}</span>
                    <LoginWindowReduxForm onSubmit={sendLoginData} changeRememberMe={changeRememberMe}/>
                </div>
            </div>
        </div>
    );
}

const LoginWindowForm = ({handleSubmit, changeRememberMe}) => {
    return (
        <form action="" className={classes.LoginWindow__form} onSubmit={handleSubmit}>
            <Field name="email" component={Input} type="email" placeholder='E-mail' validate={[required]} />
            <Field name="password" component={Input} type="password" placeholder='Password' validate={[required]}/>
            <Field name="rememberMe" component="input" type="checkbox" onClick={changeRememberMe} className={classes.LoginWindow__remember} />
            <button className={classes.LoginWindow__button}>Log In</button>
            <NavLink className={classes.LoginWindow__register} to={'/registration'}>Register</NavLink>
        </form>
    )
}

const LoginWindowReduxForm = reduxForm({ form: 'login' })(LoginWindowForm);

export default LoginWindow;
