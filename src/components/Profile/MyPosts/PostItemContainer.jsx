import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { deletePostThunk } from '../../../redux/profileReducer';
import PostItem from './PostItem';

const PostItemContainer =(props)=>{
    const deletePost = (target_post_ID) =>{
        props.deletePost(props.match.params.userID?props.match.params.userID:localStorage.getItem('VReacte'), target_post_ID);
    }
    return <PostItem posts={props.posts} deletePost={deletePost} isAuth={props.isAuth}/>
}

const mapStateToProps = (state) =>{
    return{
        posts: state.profileData.posts,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deletePost(targetID, target_post_ID){
            dispatch(deletePostThunk(targetID, target_post_ID))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostItemContainer));