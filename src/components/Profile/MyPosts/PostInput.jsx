import React from "react";
import classes from './PostInput.module.css';
const PostInput = () =>{
    return(
        <div className={classes.Input}>
            <input type="text" className={classes.Input__area} placeholder="Add Title"/>
            <input type="text" className={classes.Input__area} placeholder="Add text"/>
            <button className={classes.Add__post}>Add Post</button>
        </div>
    );
};

export default PostInput;