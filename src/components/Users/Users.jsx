import React from 'react';
import Avatar from "../Profile/Avatar";
import classes from './Users.module.css';
import { NavLink } from "react-router-dom";

const Users = (props) => {

    let subscribes = props.subscribes ? props.subscribes : [];
    const follow = (e) => {
        props.followUser(e.target.id);
    }

    const pages = [];
    for (let i = 1; i <= props.totalPagesNumber; i++) {
        pages.push(i);
    }

    return (
        <>
            <div className={classes.pages__cover}>
                {pages.map(num => {
                    return <span className={props.currentPage == num ? classes.current__page : classes.__page} onClick={() => {
                        props.goToPage(num);
                    }}> {num} </span>
                })}
            </div>
            {props.users.map(el => {
                if (Number(props.current_id) != Number(el.id)) {
                    return (
                        <div className={classes.User__container}>
                            <div className={classes.User__follow}>
                                <NavLink to={`/profile/${el.id}`}> <Avatar /> </NavLink>
                                {Number(localStorage.getItem('VReacte'))
                                    ? subscribes.includes(el.id)
                                        ? <button disabled={props.isFollowing.includes(el.id) ? true : false} id={el.id} onClick={follow} className={classes.User__unfollow__button}>Unfollow</button>
                                        : <button disabled={props.isFollowing.includes(el.id) ? true : false} id={el.id} onClick={follow} className={classes.User__follow__button}>Follow</button>
                                    : null}
                            </div>
                            <NavLink to={`/profile/${el.id}`} className={classes.User__about}>
                                <div className={classes.User__description}>
                                    <h3 className={classes.User__description__name}>{el.name}</h3>
                                    <p className={classes.User__description__status}>{el.status}</p>
                                </div>
                                <div className={classes.User__location}>
                                    <h4 className={classes.User__location__country}>{el.location.country}</h4>
                                    <p className={classes.User__location__sity}>{el.location.sity}</p>
                                </div>
                            </NavLink>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default React.memo(Users);