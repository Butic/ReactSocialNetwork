import React from 'react';
import { connect } from 'react-redux';
import classes from './ChartMessages.module.css';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';

const ChartMessages = (props) =>{
    const userID = props.match.params.userID
    const myID = localStorage.getItem('VReacte')
    console.log(userID)
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

const mapStateToProps=(state)=>{
    return{
        messages: state.dialogData.messages,
        dialogs: state.dialogData.dialogs,
    }
}

export default compose(connect(mapStateToProps), withRouter) (ChartMessages);