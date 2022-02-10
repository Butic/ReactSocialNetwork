import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './DialogMembers.module.css';
import DialogItems from './DialogItems';
import { getOpponentsDataThunk } from '../../../redux/dialogsReducer';


const DialogMembers = (props) =>{

    useEffect(()=>{
        props.getOpponentsData(props.opponentsID)
    },[props.opponentsID])
    return(
        <ul className={classes.Dialog__members}>
            {props.opponents.map(el=><DialogItems id={el.id} name={el.name} avatar={el.photos.avatar}/>)}
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogMembers);