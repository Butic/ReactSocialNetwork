import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { addPostLikeThunk, deletePostThunk } from '../../../redux/profileReducer';
import PostItem from './PostItem';

const PostItemContainer =(props)=>{
    const myID = props.match.params.userID?props.match.params.userID:localStorage.getItem('VReacte')?localStorage.getItem('VReacte'):sessionStorage.getItem('VReacte');
    
    const deletePost = (target_post_ID) =>{
        props.deletePost(myID, target_post_ID);
    }

    const addLike = (post_id, senderID) =>{
        props.addLike(myID, post_id, senderID);
    }

    return <PostItem posts={props.posts} addLike={addLike} deletePost={deletePost} isAuth={props.isAuth} myID={myID}/>
}

const mapStateToProps = (state) =>{
    return{
        posts: state.profileData.posts
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deletePost(targetID, target_post_ID){
            dispatch(deletePostThunk(targetID, target_post_ID))
        },
        addLike(myID, post_id, senderID){
            dispatch(addPostLikeThunk(myID, post_id, senderID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostItemContainer));