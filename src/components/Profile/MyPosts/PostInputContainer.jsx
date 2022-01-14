import React, {useEffect} from "react";
import { connect } from "react-redux";
import { addPostThunk, setSenderNameThunk } from "../../../redux/profileReducer";
import PostInput from "./PostInput";
import { withRouter } from "react-router-dom";

const PostInputContainer =(props)=>{

    useEffect(()=>{
        props.setSenderName(localStorage.getItem('VReacte'));
    },[props.senderName]);

    const addNewPost=(newPost)=>{
        props.addPost(props.match.params.userID?props.match.params.userID:localStorage.getItem('VReacte'), props.senderName, newPost)
    }
        return <PostInput addPost={addNewPost}/>
}

const mapStateToProps=(state)=>{
    return{
        senderName: state.profileData.senderName
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addPost(targetID, senderName="Incognito", newPost){
            dispatch(addPostThunk(targetID, senderName, newPost));
        },
        setSenderName(senderID){
            dispatch(setSenderNameThunk(senderID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostInputContainer));