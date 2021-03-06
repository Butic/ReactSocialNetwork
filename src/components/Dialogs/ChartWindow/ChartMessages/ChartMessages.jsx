import React from 'react';
import classes from './ChartMessages.module.css';

const ChartMessages = (props) =>{
    if(props.targetedDialog) {
        return(
            props.targetedDialog.dialog.map(el=>{
                if(Number(el.sender_id)==Number(props.myID)){
                    return(
                        <span className={classes.Chart__me} key={el.id}>{el.text} 
                            <span className={classes.Date__me}>{el.id}</span> 
                        </span>);
                }
                else{
                    return(
                        <span className={classes.Chart__oponent} key={el.id}>{el.text} 
                            <span className={classes.Date__oponent}>{el.id}</span> 
                        </span>);
                }
            })
        )
    }
    else if(props.userID&&!props.targetedDialog) return <h2 className={classes.Chart__Choose}>Write first messsage</h2>
    else if(!props.userID) return <h2 className={classes.Chart__Choose}>Choose any dialog</h2>
    else return <h2 className={classes.Chart__Choose}>Loading, please wiat</h2>

}

export default ChartMessages;