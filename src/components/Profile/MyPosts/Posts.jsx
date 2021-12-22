import React from "react";
import PostInputContainer from "./PostInputContainer";
import PostItem from "./PostItem";
import classes from './PostsContainer.module.css';
const Posts = (props) =>{
    return(
        <div className={classes.PostsContainer}>
            <PostInputContainer newPost={props.profileData.newPost} dispatch={props.dispatch} />

            {props.profileData.posts.map(el=><PostItem number={el.number} title={el.title} text={el.text} likes={el.likes}/>)}
            <div className={classes.last}></div>
        </div>
    );
};

export default Posts;