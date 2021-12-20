import React from 'react';
import classes from './ChartWindow.module.css';
import ChartMessages from './ChartMessages/ChartMessages';
import InputMessage from './InputMessage/InputMessage';

const ChartWindow = (props) =>{
     return(
        <div>
            <ul className={classes.ChartWindow}>
                <div className={classes.ChartWidow__head}><h2>Friend:</h2> <h2>Me:</h2> </div>
                {props.dialogData.messages.map(el=><ChartMessages id={el.id} me={el.me} message={el.message} date={el.date}/>)}
            </ul>
        <InputMessage dialogData={props.dialogData} dispatch={props.dispatch}/>
        </div>
    );
}

export default ChartWindow;