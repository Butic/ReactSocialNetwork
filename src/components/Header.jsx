import react from "react";
import classes from '../styles/Header.module.css';
import Avatar from './Avatar';

const Header = () =>{
    return(
        <header className={classes.Header}>
            <img className={classes.Header__logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgsnX1c2t44rNFqGWbnkwjxBvgtTJaJ7LFA&usqp=CAU" alt="Header Logo" />
            <h1 className={classes.Header__name} >My First React Web Site</h1>
            <Avatar/>
        </header>
    );
}

export default Header;