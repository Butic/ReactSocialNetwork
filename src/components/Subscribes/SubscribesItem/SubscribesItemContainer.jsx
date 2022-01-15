import React from 'react';
import { connect } from 'react-redux';
import SubscribesItem from './SubscribesItem';

const mapStateToProps=(state)=>{
    return{
        friends: state.subscribesData.friends
    }
}

export default connect(mapStateToProps)(SubscribesItem);