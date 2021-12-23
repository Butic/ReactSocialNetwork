import React from 'react';
import classes from './InputMessage.module.css';

const InputMessage = (props) =>{

    const newMessageText = React.useRef();
    const onTextAreaChange = () => {
        props.changeText(newMessageText.current.value);
    }
    const onAddMessage = (e) =>{
        e.preventDefault();
        props.addMessage();
    }

    return(
        <form action="" className={classes.Input__form}>
            <textarea ref={newMessageText}  onChange={onTextAreaChange} className={classes.Input__area} placeholder='Enter Your Message Here...' value={props.newMessage}></textarea>
            <button onClick={onAddMessage} className={classes.Input__button}>Send</button>
        </form>
    );
}

export default InputMessage;