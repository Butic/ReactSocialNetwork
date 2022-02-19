import React, {useEffect} from "react";
import { connect } from "react-redux";
import { addPostThunk, setSenderNameThunk } from "../../../redux/profileReducer";
import PostInput from "./PostInput";
import { withRouter } from "react-router-dom";

const PostInputContainer = (props) => {
    const usersID = localStorage.getItem('VReacte')?localStorage.getItem('VReacte'):sessionStorage.getItem('VReacte')
    useEffect(()=>{
        props.setSenderName(usersID);
    },[props.senderName]);

    const addNewPost=(newPost)=>{
        props.addPost(props.match.params.userID?props.match.params.userID:usersID, props.senderName, props.senderAvatar, newPost)
    }
        return <PostInput addPost={addNewPost}/>
}

const mapStateToProps=(state)=>{
    return{
        senderName: state.profileData.senderName,
        senderAvatar: state.profileData.senderAvatar
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addPost(targetID, senderName="Incognito", senderAvatar="https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-1506810-1278719.png", newPost){
            dispatch(addPostThunk(targetID, senderName, senderAvatar, newPost));
        },
        setSenderName(senderID){
            dispatch(setSenderNameThunk(senderID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostInputContainer));