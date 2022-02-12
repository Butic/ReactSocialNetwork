import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../Avatar/Avatar';
import classes from './DialogMembers.module.css';

const DialogItems=(props)=>{
    return(
        <NavLink to={"/dialogs/"+props.id} className={classes.Dialog__member} activeClassName={classes.active}><Avatar avatar={props.avatar}/> {props.name} <span className={classes.Dialog__member_settings} onClick={()=>{props.deleteDialog(props.id)}}/></NavLink>
    );
};

export default DialogItems;