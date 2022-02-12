import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './DialogMembers.module.css';
import DialogItems from './DialogItems';
import { deleteDialogThunk, getOpponentsDataThunk } from '../../../redux/dialogsReducer';


const DialogMembers = (props) =>{
    useEffect(()=>{
        props.getOpponentsData(props.opponentsID)
    },[props.opponentsID])
    const deleteDialog=opponentID=>{
        const dialogID = `${localStorage.getItem('VReacte')}and${opponentID}`;
        props.deleteDialog(dialogID, opponentID)
    }
    return(
        <ul className={classes.Dialog__members}>
            {props.opponents.map(el=><DialogItems id={el.id} name={el.name} avatar={el.photos.avatar} deleteDialog={deleteDialog}/>)}
          </ul>
    );
};

const mapStateToProps = (state) =>{
    return{
        dialogs: state.dialogData.dialogs,
        opponentsID: state.dialogData.opponentsID,
        opponents: state.dialogData.opponents
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        getOpponentsData(opponentsID){
            dispatch(getOpponentsDataThunk(opponentsID))
        },
        deleteDialog(dialogID, opponentID){
            dispatch(deleteDialogThunk(dialogID, opponentID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogMembers);