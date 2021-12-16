import React from 'react';
import classes from './ChartMessages.module.css';

const ChartMessages = (props) =>{
    if(props.me){
        return(<span me={props.me} className={classes.me}>{props.message}</span>);
    }
    else{
        return(<span me={props.me} className={classes.Chart__text}>{props.message}</span>);
    }
}

export default ChartMessages;