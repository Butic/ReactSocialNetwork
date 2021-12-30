import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';

const mapStateToProps = (state) =>{
    return{
        posts: state.profileData.posts
    }
}

const PostItemContainer = connect(mapStateToProps)(PostItem);

export default PostItemContainer;