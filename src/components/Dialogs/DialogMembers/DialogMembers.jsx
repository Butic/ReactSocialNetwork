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

    const dialogData = [
        {id:1, name:'Andrew'},
        {id:2, name:'Alena'},
        {id:3, name:'Dimas'},
        {id:4, name:'Artem'},
        {id:5, name:'Elena'},
        {id:6, name:'Alexey'},
        {id:7, name:'Yurok'}
    ];

    return(
        <ul className={classes.Dialog__members}>
            {dialogData.map(el=><DialogItems id={el.id} name={el.name}/>)}
          </ul>
    );
};

export default DialogMembers;