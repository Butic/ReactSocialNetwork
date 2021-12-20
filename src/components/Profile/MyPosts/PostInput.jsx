import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profileReducer";
import classes from './PostInput.module.css';

const PostInput = (props) =>{
    const newTitle = React.useRef();
    const newText = React.useRef();

    const addPost=()=>{
        props.dispatch(addPostActionCreator());
        props.dispatch(onPostChangeActionCreator('',''));
    }

    const onPostChange=()=>{
        props.dispatch(onPostChangeActionCreator(newTitle.current.value, newText.current.value));
    }

    return(
        <div className={classes.Input}>
            <input onChange={onPostChange} ref={newTitle} type="text" className={classes.Input__area} placeholder="Add Title" value={props.newPost.newPostTitle}/>
            <input onChange={onPostChange} ref={newText} type="text" className={classes.Input__area} placeholder="Add Text" value={props.newPost.newPostText}/>
            <button onClick={addPost} className={classes.Add__post}>Add Post</button>
        </div>
    );
};

export default PostInput;