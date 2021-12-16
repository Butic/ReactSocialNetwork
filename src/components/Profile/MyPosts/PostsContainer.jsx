import React from "react";
import PostInput from "./PostInput";
import PostItem from "./PostItem";
import classes from './PostsContainer.module.css';
const PostsContainer = (props) =>{
    return(
        <div className={classes.PostsContainer}>
            <PostInput/>

            {props.postData.map(el=><PostItem number={el.number} title={el.title} text={el.text} likes={el.likes}/>)}
            <div className={classes.last}></div>
        </div>
    );
};

export default PostsContainer;