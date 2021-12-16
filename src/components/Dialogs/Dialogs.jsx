import React from 'react';
import classes from './Dialogs.module.css';
import DialogMembers from './DialogMembers/DialogMembers';
import ChartWindow from './ChartWindow/ChartWindow';
const Dialogs = (props) =>{

    return(
        <div className={classes.Dialogs}>
            <div className={classes.Dialogs__left_side}>
            <input type="search" placeholder="Search..." className={classes.Dialog__search} />
                <DialogMembers dialogData={props.dialogData}/>
            </div>
            <div className={classes.Dialogs__right_side}>
                <ChartWindow messagesData={props.messagesData} />
            </div>
        </div>
    );
};

export default Dialogs;