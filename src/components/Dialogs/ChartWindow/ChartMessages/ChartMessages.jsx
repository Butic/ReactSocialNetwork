import React from 'react';
import classes from './ChartMessages.module.css';

const ChartMessages = (props) =>{
    return(
        props.messages.map(el=>{
            if(el.me){
                return(
                    <span me={el.me} className={classes.Chart__me}>{el.message} 
                        <span className={classes.Date__me}>{el.date}</span> 
                    </span>);
            }
            else{
                return(
                    <span me={el.me} className={classes.Chart__oponent}>{el.message} 
                        <span className={classes.Date__oponent}>{el.date}</span> 
                    </span>);
            }
        })
    )
}

export default ChartMessages;