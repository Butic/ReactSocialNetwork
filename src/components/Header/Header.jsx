import React from "react";
import classes from './Header.module.css';
import Avatar from '../Profile/Avatar';

const Header = () =>{
    return(
        <header className={classes.Header}>
            <img className={classes.Header__logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgsnX1c2t44rNFqGWbnkwjxBvgtTJaJ7LFA&usqp=CAU" alt="Header Logo" />
            <h1 className={classes.Header__name} >React Web Site</h1>
            <Avatar/>
        </header>
    );
}

export default Header;