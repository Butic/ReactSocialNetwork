import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogMembers.module.css';
import active from '../../Navbar/Nav.module.css';
import Avatar from '../../Profile/Avatar';

const DialogItems=(props)=>{
    return(
        <NavLink to={"/dialogs/"+props.id} className={classes.Dialog__member} activeClassName={active.active}><Avatar/> {props.name} <span className={classes.Dialog__member_settings} /></NavLink>
    );
}

const DialogMembers = (props) =>{
    return(
        <ul className={classes.Dialog__members}>
            {props.chartMembers.map(el=><DialogItems id={el.id} name={el.name}/>)}
          </ul>
    );
};

export default DialogMembers;