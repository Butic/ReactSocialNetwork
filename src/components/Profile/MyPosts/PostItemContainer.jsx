import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { deletePostThunk } from '../../../redux/profileReducer';
import PostItem from './PostItem';

class PostItemContainer extends React.Component{
    deletePost = (target_post_ID) =>{
        this.props.deletePost(this.props.match.params.userID?this.props.match.params.userID:localStorage.getItem('VReacte'), target_post_ID);
    }
    render(){
        return <PostItem posts={this.props.posts} deletePost={this.deletePost} isAuth={this.props.isAuth}/>
    }
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