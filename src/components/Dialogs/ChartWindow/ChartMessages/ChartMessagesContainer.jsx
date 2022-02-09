import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import { setTargetIdActionCreator } from '../../../../redux/dialogsReducer';
import ChartMessages from './ChartMessages';

const ChartMessagesConstainer = (props) =>{
    const userID = props.match.params.userID
    const myID = localStorage.getItem('VReacte')
    if(props.targetedUserId!=userID) props.setTargetId(userID);
    const targetedDialogId = `${myID}and${userID}`;
    const targetedDialog = props.dialogs.filter(el=>el.id==targetedDialogId);
   
    return(
        <ChartMessages messages={props.messages} targetedDialog={targetedDialog[0]} myID={myID} userID={userID}/>
    )
}

const mapStateToProps=(state)=>{
    return{
        dialogs: state.dialogData.dialogs,
        targetedUserId: state.dialogData.targetedUserId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setTargetId(targetedUserId){
            dispatch(setTargetIdActionCreator(targetedUserId))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter) (ChartMessagesConstainer);