import React from 'react';
import { connect } from 'react-redux';
import { addMyDataActionCreator, disableButtonActionCreator, followActionCreator, goToPageActionCreator, toggleFetchingActionCreator, totalPagesCounterActionCreator, userListActionCreator } from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import PreLoader from '../UI/PreLoader';
import { addMyData, usersList } from '../API/usersAPI';

class UsersItem extends React.Component {

    componentDidMount() {
        if (this.props.users.length == 0) {
            this.props.toggleFetching(true);
            setTimeout(() => {
                addMyData(this.props.current_id).then(response1=>{
                    this.props.addMyData(response1.data)
                }).then(usersList(this.props.currentPage)
                .then(responce2 => {
                    this.props.toggleFetching(false);
                    this.props.totalPages(Math.ceil(responce2.headers["x-total-count"] / 10));
                    this.props.usersList(responce2.data);
                })
                )
            }, 2000);
        }
    }
    followUser=(target_id)=>{
        this.isFollowing(target_id);
        if (!this.props.myData.subscribes.includes(Number(target_id))) {
            const newData = { ...this.props.myData, subscribes: [...this.props.myData.subscribes, Number(target_id)] };
            return axios.delete('http://localhost:8000/users/' + this.props.current_id).then(() => {
                return axios.post('http://localhost:8000/users/', newData).then((responce)=>{
                    this.props.follow(responce.data);
                    this.isFollowing(target_id);
                })
            })
        }
        else {
            const newData = { ...this.props.myData, subscribes: [...this.props.myData.subscribes.filter(el => el != Number(target_id))] }
            return axios.delete('http://localhost:8000/users/' + this.props.current_id).then(() => {
                return axios.post('http://localhost:8000/users/', newData).then((responce)=>{
                    this.props.follow(responce.data);
                    this.isFollowing(target_id);
                })
            })
        }
    }
    goToPage = (pageNum) => {
        this.props.toggleFetching(true);
        this.props.goToPage(pageNum);
        setTimeout(() => {
            axios.get(`http://localhost:8000/users/?_page=${pageNum}`).then(responce => {
                this.props.toggleFetching(false);
                this.props.usersList(responce.data);
            })
        }, 2000);
    }
    isFollowing=(target_id)=>{
        if(this.props.isFollowing.includes(Number(target_id))){
            this.props.disableButton([...this.props.isFollowing.filter(el=>el!=Number(target_id))])
        }
        else{
            this.props.disableButton([...this.props.isFollowing, Number(target_id)])
        }
    }
    render() {
        return (
            <>
                {this.props.isFetching && <PreLoader />}
                <Users isFollowing={this.props.isFollowing} subscribes={this.props.myData.subscribes} current_id={this.props.current_id} followUser={this.followUser} goToPage={this.goToPage} users={this.props.users} totalPagesNumber={this.props.totalPagesNumber} currentPage={this.props.currentPage} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        currentPage: state.usersData.currentPage,
        totalPagesNumber: state.usersData.totalPages,
        isFetching: state.usersData.isFetching,
        current_id: state.usersData.current_id,
        subscribes: state.usersData.subscribes,
        isFollowing: state.usersData.isFollowing,
        myData: state.usersData.myData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow(id) {
            dispatch(followActionCreator(id))
        },
        usersList(users) {
            dispatch(userListActionCreator(users))
        },
        goToPage(pageNum) {
            dispatch(goToPageActionCreator(pageNum))
        },
        totalPages(totalPages) {
            dispatch(totalPagesCounterActionCreator(totalPages))
        },
        toggleFetching(isFetching) {
            dispatch(toggleFetchingActionCreator(isFetching))
        },
        addMyData(data){
            dispatch(addMyDataActionCreator(data))
        },
        disableButton(isFollowingArray){
            dispatch(disableButtonActionCreator(isFollowingArray))
        }
    }
}

const UsersItemContainer = connect(mapStateToProps, mapDispatchToProps)(UsersItem);

export default UsersItemContainer;