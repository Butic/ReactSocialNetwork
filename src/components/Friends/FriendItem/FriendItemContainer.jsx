import React from 'react';
import { connect } from 'react-redux';
import FriendItem from './FriendItem';

const mapStateToProps=(state)=>{
    return{
        friends: state.friendData.friends
    }
}

export default connect(mapStateToProps)(FriendItem);