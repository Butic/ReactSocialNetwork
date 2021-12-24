import React from "react";
import classes from './Nav.module.css';
import { NavLink } from "react-router-dom";
import Avatar from '../Profile/Avatar';
const Nav = () =>{
    return(
        <ul className={classes.Nav}>
            <NavLink to="/profile" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>My Page</li></NavLink>
            <NavLink to="/dialogs" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Dialogs</li></NavLink>
            <NavLink to="/friends" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Friends</li></NavLink>
            <NavLink to="/photo" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Photo</li></NavLink>
            <NavLink to="/music" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Music</li></NavLink>
            <NavLink to="/users" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Users</li></NavLink>
            <NavLink to="/settings" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Settings</li></NavLink>
            <div className={classes.Nav__friendsField}>
                <h2 className={classes.Nav__friendsField_header}>My Friends</h2>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
            </div>
        </ul>
        );
}

export default Nav;