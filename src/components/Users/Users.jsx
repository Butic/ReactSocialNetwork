import React from 'react';
import Avatar from "../Profile/Avatar";
import classes from './Users.module.css';

const Users = (props) =>{

    const follow=(e)=>{
        props.follow(e.target.id);
    }

    const pages=[];
        for(let i=1; i<=props.totalPagesNumber; i++){
            pages.push(i);
        }

    return(
        <div className={classes.cover}>
                    {pages.map(num=>{
                        return <span className={props.currentPage == num && classes.current__page} onClick={()=>{
                            props.goToPage(num);
                        }}> {num} </span>
                    })}
                    {props.users.map(el=>{
                    if(el.followed){
                        return(
                            <div className={classes.User__container}>
                                <div className={classes.User__follow}>
                                    <Avatar />
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
                                <div className={classes.User__about+" "+classes.User__subscribed}>
                                <div className={classes.User__description}>
                                    <h3 className={classes.User__description__name}>{el.name}</h3>
                                    <p className={classes.User__friend}>(You are subscribed)</p>
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
                })}
                </div>
    )
}

export default Users;