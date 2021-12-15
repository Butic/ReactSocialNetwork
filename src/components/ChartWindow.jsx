import React from 'react';
import classes from '../styles/ChartWindow.module.css';

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
    const ChartMessage = (props) =>{
        if(props.me){
            return(<span me={props.me} className={classes.me}>{props.message}</span>);
        }
        else{
            return(<span me={props.me} className={classes.Chart__text}>{props.message}</span>);
        }
    }
    return(
        <ul className={classes.ChartWindow}>
            <div className={classes.ChartWidow__head}><h2>Friend:</h2> <h2>Me:</h2> </div>
            {messagesData.map(el=><ChartMessage me={el.me} message={el.message} />)}
        </ul>
    );
}

export default ChartWindow;