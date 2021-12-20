import React from 'react';
import classes from'./ProfileInfo.module.css';

const ProfileInfo=()=>{
    return(
        <div className={classes.Profile}>
            <img className={classes.Profile__person_avatar} src="https://img.lovepik.com/element/45006/1283.png_860.png" alt="avatar" />
            <h2 className={classes.Profile__person_nm}>just_simple_name</h2>
            <ul className={classes.Profile__person_info}>
                <li className={classes.Profile__some}>Date Of Birth: <span>18.06.1992</span></li>
                <li className={classes.Profile__some}>City: <span>Novoross</span></li>
                <li className={classes.Profile__some}>Education: <span>IT Engineer</span></li>
                <li className={classes.Profile__some}>Web-SIte: <span>just_simple_name</span></li>
            </ul>
        </div>
    );
};

export default ProfileInfo;