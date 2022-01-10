import React from 'react';
import { connect } from 'react-redux';
import { changeMessageAreaCreator, addMyMessageCreator } from '../../../../redux/dialogsReducer';
import InputMessage from './InputMessage';

const mapStateToProps=(state)=>{
    return{
        newMessage: state.dialogData.newMessage
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeText(text){
            dispatch(changeMessageAreaCreator(text));
        },
        addMessage(){
            dispatch(addMyMessageCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMessage);