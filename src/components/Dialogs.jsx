import React from 'react';
import classes from '../styles/Dialogs.module.css';
import DialogMembers from './DialogMembers';
import ChartWindow from './ChartWindow';
const Dialogs = () =>{

    return(
        <div className={classes.Dialogs}>
            <div className={classes.Dialogs__left_side}>
            <input type="search" placeholder="Search..." className={classes.Dialog__search} />
                <DialogMembers/>
            </div>
            <div className={classes.Dialogs__right_side}>
                <ChartWindow />
            </div>
        </div>
    );
};

export default Dialogs;