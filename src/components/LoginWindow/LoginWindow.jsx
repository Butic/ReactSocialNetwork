import React from 'react';
import classes from './LoginWindow.module.css';

const LoginWindow = (props) => {

const email = React.useRef();
const password = React.useRef();

    const onValueChange=()=>{
        props.onValueChange({email:email.current.value, password:password.current.value})
    }
    const onLogin =()=>{
        props.onLogin(props.email, props.password);
    }
    return (
        <div className={classes.LoginWindow__background}>
            <div className={classes.LoginWindow__container}>
                <div className={classes.LoginWindow}>
                    <h1 className={classes.LoginWindow__header}>VReacte</h1>
                    <h2 className={classes.LoginWindow__description}>Login Window</h2>
                    <form action="" className={classes.LoginWindow__form}>
                        <input type="email" ref={email} onChange={onValueChange} className={classes.LoginWindow__email} value={props.email} />
                        <input type="password" ref={password} onChange={onValueChange} className={classes.LoginWindow__password} value={props.password}/>
                        <input type="checkbox" className={classes.LoginWindow__remember} />
                        <input type="button" onClick={onLogin} className={classes.LoginWindow__button} value="Log In" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginWindow;