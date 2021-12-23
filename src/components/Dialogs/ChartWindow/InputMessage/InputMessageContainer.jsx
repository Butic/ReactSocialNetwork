import React from 'react';
import { changeMessageAreaCreator, addMyMessageCreator } from '../../../../redux/dialogsReducer';
import InputMessage from './InputMessage';

const InputMessageContainer = (props) =>{

    const changeText = (text) => {
        props.dispatch(changeMessageAreaCreator(text));
    }
    const addMessage = () =>{
        props.dispatch(addMyMessageCreator());
    }

    return <InputMessage newMessage={props.dialogData.newMessage} changeText={changeText} addMessage={addMessage}/>;
}

export default InputMessageContainer;