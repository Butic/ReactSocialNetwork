import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, goToPageActionCreator, totalPagesCounterActionCreator, userListActionCreator } from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersItem extends React.Component{

    componentDidMount(){
        axios.get(`http://localhost:8000/users?_page=${this.props.currentPage}`).then(responce=>{
                console.log(this.props)
                this.props.totalPages(Math.ceil(responce.headers["x-total-count"]/10));
                this.props.usersList(responce.data);
            })
    }

    goToPage=(pageNum)=>{
        this.props.goToPage(pageNum);
        axios.get(`http://localhost:8000/users?_page=${pageNum}`).then(responce=>{
            this.props.usersList(responce.data);
        })
    }

    render(){        
        return <Users follow={this.props.follow} goToPage={this.goToPage} users={this.props.users} totalPagesNumber={this.props.totalPagesNumber} currentPage={this.props.currentPage}/>
    }
}

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