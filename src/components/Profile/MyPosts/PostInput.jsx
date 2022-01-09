import React from "react";
import classes from './PostInput.module.css';

const PostInput = (props) =>{
    const newTitle = React.useRef();
    const newText = React.useRef();

    const onAddPost=()=>{
        const newPost={title:newTitle.current.value, text:newText.current.value}
        props.addPost(newPost);        
    }

    const onPostChange=()=>{
        props.changeInput(newTitle.current.value, newText.current.value);
    }

    return(
        <div className={classes.Input}>
            <input onChange={onPostChange} ref={newTitle} type="text" className={classes.Input__area} placeholder="Add Title" value={props.newPost.newPostTitle}/>
            <input onChange={onPostChange} ref={newText} type="text" className={classes.Input__area} placeholder="Add Text" value={props.newPost.newPostText} />
            <button onClick={onAddPost} className={classes.Add__post}>Add Post</button>
        </div>
    );
};

export default PostInput;