import React from "react";
import classes from'./ProfileInfo.module.css';
import avatar from '../UI/img/1283.png_860.png'
import { NavLink } from "react-router-dom";

const ProfileInfo = (props) =>{
    return(
        <div className={classes.Profile}>
                <img className={classes.Profile__person_avatar} src={props.avatar?props.avatar:avatar} alt="avatar" />
                {Number(props.myID)==Number(props.id)
                ?   <div className={classes.Profile__followers_subscribes_container}>
                <NavLink to="/subscribes" > <button className={classes.Profile__subscribes}>Subscribes</button> </NavLink>
                <NavLink to="/followers" > <button className={classes.Profile__followers}>Followers</button> </NavLink>
            </div>
                :
                <div className={classes.Profile__followers_subscribes_container}>
                <button className={classes.Profile__followers} onClick={props.followUser} disabled={props.isDisabled}>{props.isSubscribed?"Unfollow":"Follow"}</button>
                <NavLink to={`/dialogs/${props.id}`} ><button className={classes.Profile__subscribes}>Message</button> </NavLink>
                <NavLink to={`/photo/${props.id}`} ><button className={classes.Profile__subscribes}>Photo</button> </NavLink>
            </div>
                }
                <h2 className={classes.Profile__person_nm}>{props.name}</h2>
                {!props.editMode
                    ?   <span  className={classes.Profile__status} onClick={props.activateEditMode} >{props.status
                            ?   props.status
                            :   <input type="text" placeholder="Add your status here" className={classes.Profile__status_input}/>
                        }</span>
                    :   <input autoFocus={true} type="text" onChange={props.setStatusValue} value={props.stateStatus} placeholder="Add your status here" onBlur={props.deactivateEditMode} className={classes.Profile__status_input}/>
                }
                
                <ul className={classes.Profile__person_info}>
                    {props.DOB.date || props.DOB.month || props.DOB.year ? <li>Date Of Birth: <span>{props.DOB.date} {props.DOB.month} {props.DOB.year}</span></li> : <></>}
                    {props.location.country && <li>Country: <span>{props.location.country}</span></li>}
                    {props.location.sity && <li>Sity: <span>{props.location.sity}</span></li>}
                    {props.links.vk && <li>Vkontakte: <span>{props.links.vk}</span></li>}
                    {props.links.instagram && <li>Instagram: <span>{props.links.instagram}</span></li>}
                </ul>
            </div>
    )
}

export default ProfileInfo;