import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profileReducer";
import PostInput from "./PostInput";

const PostInputContainer = (props) =>{

    const addPost=()=>{
        props.dispatch(addPostActionCreator());
    }

    const changeInput=(title, text)=>{
        props.dispatch(onPostChangeActionCreator(title, text));
    }

    return <PostInput newPost={props.newPost} addPost={addPost} changeInput={changeInput}/>;
};

export default PostInputContainer;