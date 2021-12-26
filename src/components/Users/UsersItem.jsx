import * as axios from "axios";
import React from "react";
import Avatar from "../Profile/Avatar";
import classes from './UsersItem.module.css';
import avatar from '../UI/img/1283.png_860.png';

const UsersItem=(props)=>{
    if(props.users.length === 0){
        // axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce=>{
        //     props.usersList(responce.data.items);
        // })
        props.usersList([
            {id:1, avatar:null, followed:false, name:'Andrew', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:2, avatar:null, followed:true, name:'Alena', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:3, avatar:null, followed:true, name:'Dimas', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:4, avatar:null, followed:false, name:'Artem', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:5, avatar:null, followed:true, name:'Elena', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:6, avatar:null, followed:false, name:'Alexey', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:7, avatar:null, followed:false, name:'Yurok', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:8, avatar:null, followed:true, name:'Andrew', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:9, avatar:null, followed:false, name:'Alena', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:10, avatar:null, followed:true, name:'Dimas', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:11, avatar:null, followed:true, name:'Artem', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:12, avatar:null, followed:false, name:'Elena', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:13, avatar:null, followed:false, name:'Alexey', status:'some status here', location:{country:'Country', sity:'Sity'}},
            {id:14, avatar:null, followed:false, name:'Yurok', status:'some status here', location:{country:'Country', sity:'Sity'}}
        ]);
    }
    const follow=(e)=>{
        props.follow(e.target.id);
    }

    return(
        props.users.map(el=>{
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
                            {/* <h4 className={classes.User__location__country}>{el.location.country},</h4> */}
                            {/* <p className={classes.User__location__sity}>{el.location.sity}</p> */}
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
                            {/* <h4 className={classes.User__location__country}>{el.location.country},</h4> */}
                            {/* <p className={classes.User__location__sity}>{el.location.sity}</p> */}
                        </div>
                        </div>
                    </div>
                )
            }
        })
    )
}

export default UsersItem