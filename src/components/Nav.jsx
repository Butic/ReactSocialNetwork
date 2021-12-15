import React from "react";
import classes from '../styles/Nav.module.css';
import { NavLink } from "react-router-dom";
const Nav = () =>{
    return(
        <ul className={classes.Nav}>
            <NavLink to="/profile" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>My Page</li></NavLink>
            <NavLink to="/dialogs" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Dialogs</li></NavLink>
            <NavLink to="/friend" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Friends</li></NavLink>
            <NavLink to="/photo" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Photo</li></NavLink>
            <NavLink to="/music" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Music</li></NavLink>
            <NavLink to="/bookmakrs" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Bookmakrs</li></NavLink>
            
            <div className={classes.Nav__link_space}></div>
            <NavLink to="/settings" className={classes.NL} activeClassName={classes.active}><li className={classes.Nav__link}>Settings</li></NavLink>
        </ul>
        );
}

export default Nav;