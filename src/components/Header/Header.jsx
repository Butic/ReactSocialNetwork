import React from "react";
import classes from './Header.module.css';
import Avatar from '../Profile/Avatar';
import logo from '../UI/img/logo.png';

const Header = () =>{
    return(
        <header className={classes.Header}>
            <img className={classes.Header__logo} src={logo} alt="Header Logo" />
            <h1 className={classes.Header__name} >React Web Site</h1>
            <Avatar/>
        </header>
    );
}

export default Header;