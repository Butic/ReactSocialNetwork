import React from 'react';
import classes from './Settings.module.css'

const Settings = (props) =>{
    return(
        <div className={classes.Settings__container}>
            <span className="Settings__span">E-mail: </span><input type="text" className="Settings__input" />
            <span className="Settings__span">Password: </span><input type="text" className="Settings__input" />
            <span className="Settings__span">Name: </span><input type="text" className="Settings__input" />
            <span className="Settings__span">Date of Birth: </span><input type="date" className="Settings__input"/>
            <div className={classes.Settings__location}>
                <span className="Settings__span">Country: </span><input type="text" className="Settings__input" />
                <span className="Settings__span">Sity: </span><input type="text" className="Settings__input" />
            </div>
            <div className={classes.Settings__links}>
                <span className="Settings__span">Facebook: </span><input type="text" className="Settings__input" />
                <span className="Settings__span">Instagram: </span><input type="text" className="Settings__input" />
            </div>
        </div>
    )
}

export default Settings;