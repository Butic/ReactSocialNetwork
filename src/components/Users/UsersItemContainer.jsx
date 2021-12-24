import React from 'react';
import { connect } from 'react-redux';
import UsersItem from './UsersItem';
import { followActionCreator } from "../../redux/usersReducer";

const mapStateToProps=(state)=>{
    return{
        users: state.usersData.users
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        follow(id){
            dispatch(followActionCreator(id))
        }
    }
}

const UsersItemContainer=connect(mapStateToProps, mapDispatchToProps)(UsersItem);

export default UsersItemContainer;