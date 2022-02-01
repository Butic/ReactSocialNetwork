import React from "react";
import classes from './Nav.module.css';
import { NavLink } from "react-router-dom";
import Avatar from '../Avatar/Avatar';

const Nav = () =>{
    return(
        <ul className={classes.Nav}>
            <NavLink to="/profile" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Profile</li></NavLink>
            <NavLink to="/dialogs" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Dialogs</li></NavLink>
            <NavLink to="/followers" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Followers</li></NavLink>
            <NavLink to="/subscribes" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Subscribes</li></NavLink>
            <NavLink to="/photos" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Photos</li></NavLink>
            <NavLink to="/users" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Users</li></NavLink>
            <NavLink to="/settings" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Settings</li></NavLink>
            <div className={classes.Nav__friendsField}>
                <h2 className={classes.Nav__friendsField_header}>Popular</h2>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
            </div>
        </ul>
        );
}

export default Nav;