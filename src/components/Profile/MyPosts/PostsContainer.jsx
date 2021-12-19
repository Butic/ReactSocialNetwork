import React from "react";
import PostInput from "./PostInput";
import PostItem from "./PostItem";
import classes from './PostsContainer.module.css';
const PostsContainer = (props) =>{
    return(
        <div className={classes.PostsContainer}>
            <PostInput newPost={props.profileData.newPost} onPostChange={props.onPostChange} addPost={props.addPost}/>

            {props.profileData.posts.map(el=><PostItem number={el.number} title={el.title} text={el.text} likes={el.likes}/>)}
            <div className={classes.last}></div>
        </div>
    );
};

export default PostsContainer;