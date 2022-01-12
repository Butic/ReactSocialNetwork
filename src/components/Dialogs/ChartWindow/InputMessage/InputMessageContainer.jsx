import React from 'react';
import { connect } from 'react-redux';
import { addMyMessageCreator } from '../../../../redux/dialogsReducer';
import InputMessage from './InputMessage';

const mapDispatchToProps=(dispatch)=>{
    return{
        addMessage(message){
            dispatch(addMyMessageCreator(message));
        }
    }
}

export default connect(null, mapDispatchToProps)(InputMessage);