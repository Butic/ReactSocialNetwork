import React from 'react';
import { connect } from 'react-redux';
import UsersItem from './UsersItem';
import { followActionCreator, goToPageActionCreator, totalPagesCounterActionCreator, userListActionCreator } from "../../redux/usersReducer";

const mapStateToProps=(state)=>{
    return{
        users: state.usersData.users,
        currentPage: state.usersData.currentPage,
        totalPagesNumber: state.usersData.totalPages
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        follow(id){
            dispatch(followActionCreator(id))
        },
        usersList(users){
            dispatch(userListActionCreator(users))
        },
        goToPage(pageNum){
            dispatch(goToPageActionCreator(pageNum))
        },
        totalPages(totalPages){
            dispatch(totalPagesCounterActionCreator(totalPages))
        }
    }
}

const UsersItemContainer=connect(mapStateToProps, mapDispatchToProps)(UsersItem);

export default UsersItemContainer;