import React from 'react';
import classes from './InputMessage.module.css';

const InputMessage = () =>{

    const newMessage = React.useRef();

    const addMessage = (e) =>{
        e.preventDefault();
        const text = newMessage.current.value;
        if(text)alert('New messege is:\n'+text)
    }

    return(
        <form action="" className={classes.Input__form}>
            <textarea ref={newMessage} className={classes.Input__area}></textarea>
            <button onClick={addMessage} className={classes.Input__button}>Send</button>
        </form>
    );
}

export default InputMessage;