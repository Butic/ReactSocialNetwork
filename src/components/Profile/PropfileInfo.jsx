import React from 'react';
import classes from'./ProfileInfo.module.css';
import avatar from '../UI/img/1283.png_860.png'

const ProfileInfo=(props)=>{
    return(
        <div className={classes.Profile}>
            <img className={classes.Profile__person_avatar} src={props.avatar?props.avatar:avatar} alt="avatar" />
            <h2 className={classes.Profile__person_nm}>{props.name}</h2>
            <ul className={classes.Profile__person_info}>
                {props.DOB.date || props.DOB.month || props.DOB.year ? <li className={classes.Profile__some}>Date Of Birth: <span>{props.DOB.date} {props.DOB.month} {props.DOB.year}</span></li> : <></>}
                {props.location.country && <li className={classes.Profile__some}>Country: <span>{props.location.country}</span></li>}
                {props.location.sity && <li className={classes.Profile__some}>Sity: <span>{props.location.sity}</span></li>}
                {props.links.vk && <li className={classes.Profile__some}>Vkontakte: <span>{props.links.vk}</span></li>}
                {props.links.instagram && <li className={classes.Profile__some}>Instagram: <span>{props.links.instagram}</span></li>}
            </ul>
        </div>
    );
};

export default ProfileInfo;