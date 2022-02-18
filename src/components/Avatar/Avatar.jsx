import React from 'react';
import classes from './Avatar.module.css';
import plugImage from '../UI/img/Plug.png';
const Avatar = (props) =>{
    return(
        <img key={props.avatar && props.avatar} src={props.avatar ? props.avatar : plugImage} alt="Avatar" className={classes.avatar} />
    );
}

export default Avatar;