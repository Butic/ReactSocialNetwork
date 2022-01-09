import React from 'react';
import classes from './Dialogs.module.css';
import ChartWindow from './ChartWindow/ChartWindow';
import DialogMembersContainer from './DialogMembers/DialogMembersContainer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) =>{
    if(!props.isAuth) return <Redirect to={"/login"}/>
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

const mapStateToProps=(state)=>{
    return{
        isAuth:state.loginData.isAuth
    }
}

export default connect(mapStateToProps)(Dialogs);