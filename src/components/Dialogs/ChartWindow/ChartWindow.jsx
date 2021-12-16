import React from 'react';
import classes from './ChartWindow.module.css';
import ChartMessages from './ChartMessages/ChartMessages';
import InputMessage from './InputMessage/InputMessage';

const ChartWindow = (props) =>{
    const lorem = 'dolor sit amet consectetur adipisicing elit. Minima accusantium maxime magni atque deserunt? Doloribus unde dolores, molestias, suscipit enim molestiae dignissimos dolorum quidem aliquid soluta incidunt officiis dolor nihil.';
    
    const messagesData = [
        {id:1, me:true, message:lorem},
        {id:1, me:false, message:lorem+lorem},
        {id:1, me:true, message:lorem+lorem},
        {id:1, me:true, message:lorem+lorem+lorem},
        {id:1, me:false, message:lorem+lorem},
        {id:1, me:false, message:lorem+lorem},
        {id:1, me:true, message:lorem+lorem},
        {id:1, me:false, message:lorem+lorem+lorem},
        {id:1, me:true, message:lorem+lorem},
        {id:1, me:false, message:lorem+lorem}
    ];
    
    

    return(
        <div>
            <ul className={classes.ChartWindow}>
                <div className={classes.ChartWidow__head}><h2>Friend:</h2> <h2>Me:</h2> </div>
                {messagesData.map(el=><ChartMessages me={el.me} message={el.message} />)}
            </ul>
        <InputMessage/>
        </div>
    );
}

export default ChartWindow;