import React from 'react';
import classes from './InputMessage.module.css';
import { Field, reduxForm } from 'redux-form';

const InputMessage = (props) =>{

    const addMessage = (value) =>{
        props.addMessage(value.message);
        value.message="";
    }
    return props.isInputVisible?<InputMessageReduxForm onSubmit={addMessage}/>:<></>
}

const InputMessageForm = (props) => {
    return(
        <form action="" className={classes.Input__form} onSubmit={props.handleSubmit} >
            <Field name="message" component="textarea" className={classes.Input__area} placeholder='Enter Your Message Here...' />
            <button className={classes.Input__button}>Send</button>
        </form>
    )
}

const InputMessageReduxForm = reduxForm({form:'chart_message'})(InputMessageForm)

export default InputMessage;