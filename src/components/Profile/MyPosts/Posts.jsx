import React from "react";
import PostInputContainer from "./PostInputContainer";
import PostItemContainer from "./PostItemContainer";
import classes from './PostsContainer.module.css';

const Posts = () =>{
    return(
        <div className={classes.PostsContainer}>
            <PostInputContainer />
            <PostItemContainer />
         </div>
    );
};

export default Posts;