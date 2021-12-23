import React from 'react';
import classes from './ChartWindow.module.css';
import InputMessageContainer from './InputMessage/InputMessageContainer';
import ChartMessagesContainer from './ChartMessages/ChartMessagesContainer';

const ChartWindow = () =>{
     return(
        <div>
            <ul className={classes.ChartWindow}>
                <div className={classes.ChartWidow__head}><h2>Friend:</h2> <h2>Me:</h2> </div>
                <ChartMessagesContainer/>
            </ul>
        <InputMessageContainer />
        </div>
    );
}

export default ChartWindow;