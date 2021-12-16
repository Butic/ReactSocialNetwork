import React from 'react';
import classes from './ChartWindow.module.css';
import ChartMessages from './ChartMessages/ChartMessages';
import InputMessage from './InputMessage/InputMessage';

const ChartWindow = (props) =>{
     return(
        <div>
            <ul className={classes.ChartWindow}>
                <div className={classes.ChartWidow__head}><h2>Friend:</h2> <h2>Me:</h2> </div>
                {props.messagesData.map(el=><ChartMessages me={el.me} message={el.message} />)}
            </ul>
        <InputMessage/>
        </div>
    );
}

export default ChartWindow;