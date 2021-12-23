import React from 'react';
import classes from './Dialogs.module.css';
import ChartWindow from './ChartWindow/ChartWindow';
import DialogMembersContainer from './DialogMembers/DialogMembersContainer';

const Dialogs = () =>{
    return(
        <div className={classes.Dialogs}>
            <div className={classes.Dialogs__left_side}>
                <input type="search" placeholder="Search..." className={classes.Dialog__search} />
                <DialogMembersContainer/>
            </div>
            <div className={classes.Dialogs__right_side}>
                <ChartWindow />
            </div>
        </div>
    );
};

export default Dialogs;