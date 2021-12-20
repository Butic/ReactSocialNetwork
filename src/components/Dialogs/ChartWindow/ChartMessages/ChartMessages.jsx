import React from 'react';
import classes from './ChartMessages.module.css';

const ChartMessages = (props) =>{
    if(props.me){
        return(
            <span me={props.me} className={classes.Chart__me}>{props.message} 
                <span className={classes.Date__me}>{props.date}</span> 
            </span>);
    }
    else{
        return(
            <span me={props.me} className={classes.Chart__oponent}>{props.message} 
                <span className={classes.Date__oponent}>{props.date}</span> 
            </span>);
    }
}

export default ChartMessages;