import React from 'react';
import classes from './AlertMessage.module.css';

const AlertMessage = (props) =>{
    return (
        <div className={classes.AlertMessage__container} onClick={()=>{props.setAlertMessage('')}}>
            <div className={classes.AlertMessage__frame}>
                <p className={classes.AlertMessage__text}>{props.alertText}</p>
            </div>
        </div>
    )
}

export default AlertMessage;