import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../validators/validators';
import { Input } from '../formControls/formControls';
import classes from './LoginWindow.module.css';

const LoginWindow = (props) => {
    console.log(props.handleSubmit)
    const onLogin = (value) => {
        props.onLogin(value.email, value.password);
        value.email="";
        value.password="";
    }
    if (props.isAuth) return <Redirect to={"/profile"} />
    return (
        <div className={classes.LoginWindow__background}>
            <div className={classes.LoginWindow__container}>
                <div className={classes.LoginWindow}>
                    <h1 className={classes.LoginWindow__header}>VReacte</h1>
                    <h2 className={classes.LoginWindow__description}>Login Window</h2>
                    <LoginWindowReduxForm onSubmit={onLogin}/>
                </div>
            </div>
        </div>
    );
}

const LoginWindowForm = (props) => {
    
    return (
        <form action="" className={classes.LoginWindow__form} onSubmit={props.handleSubmit}>
            <Field name="email" component={Input} type="email" className={classes.LoginWindow__email} placeholder='E-mail' validate={[required]} />
            <Field name="password" component={Input} type="password" className={classes.LoginWindow__password} placeholder='Password' validate={[required]}/>
            <Field name="rememberMe" component="input" type="checkbox" className={classes.LoginWindow__remember} />
            <button className={classes.LoginWindow__button}>Log In</button>
        </form>
    )
}

const LoginWindowReduxForm = reduxForm({ form: 'login' })(LoginWindowForm);

export default LoginWindow;
