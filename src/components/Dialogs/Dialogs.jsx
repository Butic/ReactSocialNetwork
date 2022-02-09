import React, { useEffect } from 'react';
import classes from './Dialogs.module.css';
import ChartWindow from './ChartWindow/ChartWindow';
import DialogMembersContainer from './DialogMembers/DialogMembersContainer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAllDialogsThunk } from '../../redux/dialogsReducer';

const Dialogs = (props) =>{

    useEffect(()=>{
        props.getAllDialogs(props.loggedID);
    },[]);    

    return(
        <div className={classes.Dialogs}>
            <div className={classes.Dialogs__left_side}>
                <input type="search" placeholder="Search..." className={classes.Dialog__search} />
                <DialogMembersContainer/>
            </div>
            <div className={classes.Dialogs__right_side}>
                <ChartWindow />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch =>{
    return{
        getAllDialogs(myID){
            dispatch(getAllDialogsThunk(myID))
        }
    }
}

export default compose(connect(null, mapDispatchToProps),withAuthRedirect)(Dialogs);