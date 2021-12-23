import React from 'react';
import classes from './Dialogs.module.css';
import DialogMembers from './DialogMembers/DialogMembers';
import ChartWindow from './ChartWindow/ChartWindow';
import StoreContext from '../../redux/StoreContext';

const Dialogs = () =>{
    return(
        <StoreContext.Consumer>
            {store=>{
                return(
                    <div className={classes.Dialogs}>
                        <div className={classes.Dialogs__left_side}>
                        <input type="search" placeholder="Search..." className={classes.Dialog__search} />
                            <DialogMembers chartMembers={store.getState().dialogData.chartMembers}/>
                        </div>
                        <div className={classes.Dialogs__right_side}>
                            <ChartWindow dialogData={store.getState().dialogData} dispatch={store.dispatch}/>
                        </div>
                    </div>
                );
            }

            }
        </StoreContext.Consumer>
    );
};

export default Dialogs;