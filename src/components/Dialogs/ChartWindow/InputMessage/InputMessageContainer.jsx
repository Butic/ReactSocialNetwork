import React from 'react';
import { connect } from 'react-redux';
import { addMyMessageThunk } from '../../../../redux/dialogsReducer';
import InputMessage from './InputMessage';

const InputMessageContainer=(props)=>{
    const isInputVisible = props.targetedUserId&&props.dialogs.length!=0?true:false;
    const myID = localStorage.getItem('VReacte');
    const addMessage=message=>{
        props.addMessage(message, myID, props.targetedUserId, props.dialogs);
    }

    return <InputMessage isInputVisible={isInputVisible} addMessage={addMessage}/>
}

const mapStateToProps=state=>{
    return{
        targetedUserId: state.dialogData.targetedUserId,
        dialogs: state.dialogData.dialogs
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addMessage(message, myID, opponentID, dialogs){
            dispatch(addMyMessageThunk(message, myID, opponentID, dialogs));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMessageContainer);