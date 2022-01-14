import React from "react";
import classes from './PostItem.module.css';
import avatar from '../../UI/img/1283.png_860.png';

const PostItem = props =>{
    const deletePost=(target_post_ID)=>{
        props.deletePost(target_post_ID)
    }
    return(
        props.posts.map(el=>{
            return(
                <div className={classes.Post}>
                    <img src={avatar} alt="Avatar" className={classes.Post__avatar} />
                    <h4 className={classes.Post__sender}>{el.senderName}</h4>
                    <div className={classes.Post__content}>
                        <span className={classes.Post__date}>{el.date}</span>
                        <h3 className={classes.Post__header}>{el.title}</h3>
                        <p className={classes.Post__texts}>{el.text}</p>
                    </div>
                    <button disabled={Number(el.senderID)==Number(localStorage.getItem('VReacte'))?false:true} onClick={()=>{deletePost(el.id)}} className={classes.Post__remove}>Delete</button>
                    <span className={classes.Post__likes}><span className={classes.Post__likesNum}>{el.likes}</span>&#9825;</span>
                </div>
            );
        })     
    );
};

export default PostItem;