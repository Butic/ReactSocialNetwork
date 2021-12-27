import * as axios from "axios";
import React from "react";
import Avatar from "../Profile/Avatar";
import classes from './UsersItem.module.css';
import avatar from '../UI/img/1283.png_860.png';

class UsersItem extends React.Component{

    follow=(e)=>{
        this.props.follow(e.target.id);
    }

    componentDidMount(){
        axios.get(`http://localhost:8000/users?_page=${this.props.currentPage}`).then(responce=>{
                this.props.totalPages(Math.ceil(responce.headers["x-total-count"]/10));
                this.props.usersList(responce.data);
            })
    }
    goToPage(pageNum){
        this.props.goToPage(pageNum);
        axios.get(`http://localhost:8000/users?_page=${pageNum}`).then(responce=>{
            this.props.usersList(responce.data);
        })
    }
    render(){
        const pages=[];
        for(let i=1; i<=this.props.totalPagesNumber; i++){
            pages.push(i);
        }
        return(
                <div className={classes.cover}>
                    {pages.map(num=>{
                        return <span className={this.props.currentPage == num && classes.current__page} onClick={()=>{
                            this.goToPage(num);
                        }}> {num} </span>
                    })}
                    {this.props.users.map(el=>{
                    if(el.followed){
                        return(
                            <div className={classes.User__container}>
                                <div className={classes.User__follow}>
                                    <Avatar />
                                    <button id={el.id} onClick={this.follow} className={classes.User__follow__button}>Follow</button>
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
                                    <button id={el.id} onClick={this.follow} className={classes.User__unfollow__button}>Unfollow</button>
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
}

export default UsersItem;