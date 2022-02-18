import React from "react";
import { NavLink } from "react-router-dom";
import classes from './PostItem.module.css';
const plug = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHn2MmRG7n_3_YqFisSV4wAIhTGDbGfHI1pMs-7imj4RwJZrtvjI-vLqjRuMaenW5CSE&usqp=CAU';

const PostItem = props =>{
    const deletePost=(target_post_ID)=>{
        props.deletePost(target_post_ID)
    }
    return(
        props.posts.map(el=>{
            return(
                <div key={el.id} className={classes.Post}>
                    <NavLink to={`/profile/${el.senderID}`} >
                        <img src={el.senderAvatar ? el.senderAvatar : plug} alt="Avatar" className={classes.Post__avatar} />
                        <h4 className={classes.Post__sender}>{el.senderName}</h4>
                    </NavLink>
                    <div className={classes.Post__content}>
                        <span className={classes.Post__date}>{el.date}</span>
                        <h3 className={classes.Post__header}>{el.title}</h3>
                        <p className={classes.Post__texts}>{el.text}</p>
                    </div>
                    <button disabled={Number(el.senderID)==Number(localStorage.getItem('VReacte'))?false:true} onClick={()=>{deletePost(el.id)}} className={classes.Post__remove}>Delete</button>
                    <span  className={el.likes.includes(props.myID)?classes.Post__liked:classes.Post__unliked} onClick={()=>{props.addLike(el.id, el.senderID)}} ><span className={classes.Post__likesNum}>{el.likes.length}</span>&#9825;</span>
                </div>
            );
        })     
    );
};

export default PostItem;