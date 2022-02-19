import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import { getOpponentsDataActionCreator, setTargetIdActionCreator } from '../../../../redux/dialogsReducer';
import ChartMessages from './ChartMessages';

const ChartMessagesConstainer = (props) =>{
    const userID = props.match.params.userID
    const myID = localStorage.getItem('VReacte')?localStorage.getItem('VReacte'):sessionStorage.getItem('VReacte');
    if(props.targetedUserId!=userID) props.setTargetId(userID);
    const targetedDialogId = `${myID}and${userID}`;
    const targetedDialog = props.dialogs.filter(el=>el.id==targetedDialogId);
    useEffect(()=>{
        if(props.dialogs.length>2&&props.opponents.length>1){
            const sortedOpponents=[];
            const sortedOpponentsID=[];
            const sortedDialogs=props.dialogs.sort((a,b)=>{
                return b.lastMessageDate-a.lastMessageDate;
            })
            sortedDialogs.map(el=>{
                const tempArray = el.id.split(`${myID}and`);
                tempArray.map(elem=>{
                    if(Number(elem))sortedOpponentsID.push(elem);
                })
            })
            sortedOpponentsID.map(el=>{
                props.opponents.map(elem=>{
                    if(Number(el)==Number(elem.id))sortedOpponents.push(elem);
                })
            })
            if(props.opponents[0].id!=sortedOpponentsID[0]) props.sortOpponents(sortedOpponents);
        }
    },[props.opponents])
    return(
        <ChartMessages messages={props.messages} targetedDialog={targetedDialog[0]} myID={myID} userID={userID}/>
    )
}

const mapStateToProps=(state)=>{
    return{
        dialogs: state.dialogData.dialogs,
        targetedUserId: state.dialogData.targetedUserId,
        opponents: state.dialogData.opponents
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setTargetId(targetedUserId){
            dispatch(setTargetIdActionCreator(targetedUserId))
        },
        sortOpponents(opponents){
            dispatch(getOpponentsDataActionCreator(opponents))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter) (ChartMessagesConstainer);