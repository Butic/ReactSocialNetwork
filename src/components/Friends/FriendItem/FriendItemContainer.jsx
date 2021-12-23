import React from 'react';
import { connect } from 'react-redux';
import FriendItem from './FriendItem';

const mapStateToProps=(state)=>{
    return{
        friends: state.friendData.friends
    }
}

const FriendItemContainer=connect(mapStateToProps)(FriendItem);

export default FriendItemContainer;