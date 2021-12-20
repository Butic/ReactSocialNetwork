import React from 'react';
import classes from './InputMessage.module.css';
import { changeMessageAreaCreator, addMyMessageCreator } from '../../../../redux/dialogsReducer';
const InputMessage = (props) =>{

    const newMessageText = React.useRef();
    const onTextAreaChange = () => {
        props.dispatch(changeMessageAreaCreator(newMessageText.current.value));
    }
    const addMessage = (e) =>{
        e.preventDefault();
        props.dispatch(addMyMessageCreator());
        props.dispatch(changeMessageAreaCreator(''));
    }

    return(
        <form action="" className={classes.Input__form}>
            <textarea ref={newMessageText}  onChange={onTextAreaChange} className={classes.Input__area} placeholder='Enter Your Message Here...' value={props.dialogData.newMessage}></textarea>
            <button onClick={addMessage} className={classes.Input__button}>Send</button>
        </form>
    );
}

export default InputMessage;