import React from "react";
import Avatar from "../Profile/Avatar";
import classes from './UsersItem.module.css'

const UsersItem=(props)=>{

    const follow=(e)=>{
        props.follow(e.target.id);
    }

    return(
        props.users.map(el=>{
            if(el.followed){
                return(
                    <div className={classes.User__container}>
                        <div className={classes.User__follow}>
                            <Avatar/>
                            <button id={el.id} onClick={follow} className={classes.User__follow__button}>Follow</button>
                        </div>
                        <div className={classes.User__about}>
                        <div className={classes.User__description}>
                            <h3 className={classes.User__description__name}>{el.name}</h3>
                            <p className={classes.User__description__status}>{el.status}</p>
                        </div>
                        <div className={classes.User__location}>
                            <h4 className={classes.User__location__country}>{el.location.country},</h4>
                            <p className={classes.User__location__sity}>{el.location.sity}</p>
                        </div>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div className={classes.User__container}>
                        <div className={classes.User__follow}>
                            <Avatar/>
                            <button id={el.id} onClick={follow} className={classes.User__unfollow__button}>Unfollow</button>
                        </div>
                        <div className={classes.User__about}>
                        <div className={classes.User__description}>
                            <h3 className={classes.User__description__name}>{el.name}</h3>
                            <p className={classes.User__description__status}>{el.status}</p>
                        </div>
                        <div className={classes.User__location}>
                            <h4 className={classes.User__location__country}>{el.location.country},</h4>
                            <p className={classes.User__location__sity}>{el.location.sity}</p>
                        </div>
                        </div>
                    </div>
                )
            }
        })
    )
}

export default UsersItem