import React from 'react';
import classes from './InputMessage.module.css';

const InputMessage = () =>{
    return(
        <form action="" className={classes.Input__form}>
            <textarea className={classes.Input__area}></textarea>
            <button className={classes.Input__button}>Send</button>
        </form>
    );
}

export default InputMessage;