import React from 'react';
import { connect } from 'react-redux';
import { addMyMessageThunk } from '../../../../redux/dialogsReducer';
import InputMessage from './InputMessage';

const InputMessageContainer=(props)=>{
    const isInputVisible = props.targetedUserId&&props.dialogs.length!=0?true:false;
    const myID = localStorage.getItem('VReacte')?localStorage.getItem('VReacte'):sessionStorage.getItem('VReacte');
    const myDialogID=`${myID}and${props.targetedUserId}`;
    const opponentsDialogID=`${props.targetedUserId}and${myID}`;
    let isMyDialogExists = false;
    let isOpponentsDialogExists = false;
    props.dialogs.map(el=>{
        if(el.id==myDialogID) isMyDialogExists=true;
        if(el.id==opponentsDialogID) isOpponentsDialogExists=true;
    })
    const addMessage=message=>{
        props.addMessage(message, myID, props.targetedUserId, props.dialogs, isMyDialogExists, isOpponentsDialogExists);
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
        addMessage(message, myID, opponentID, dialogs, isMyDialogExists, isOpponentsDialogExists){
            dispatch(addMyMessageThunk(message, myID, opponentID, dialogs, isMyDialogExists, isOpponentsDialogExists));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMessageContainer);