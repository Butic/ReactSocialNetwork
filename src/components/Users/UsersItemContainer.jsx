import React from 'react';
import { connect } from 'react-redux';
import { addMyDataActionCreator, disableButtonThunk, followUserThunk, getUsersThunk, goToPageThunk, toggleFetchingActionCreator, totalPagesCounterActionCreator, userListActionCreator } from "../../redux/usersReducer";
import Users from "./Users";
import PreLoader from '../UI/PreLoader';

class UsersItem extends React.Component {

    componentDidMount() {
        if (this.props.users.length == 0) {
            this.props.getUsers(this.props.current_id, this.props.currentPage);
        }
    }
    followUser=(target_id)=>{
        this.isFollowing(target_id);
        this.props.follow(this.props.myData, target_id, this.props.isFollowing);
    }
    goToPage = (pageNum) => {
        this.props.goToPage(pageNum);
    }

    isFollowing=(target_id)=>{
        this.props.disableButton(this.props.isFollowing, target_id);
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
        follow(myData, target_id, isFollowing) {
            dispatch(followUserThunk(myData, target_id, isFollowing))
        },
        usersList(users) {
            dispatch(userListActionCreator(users))
        },
        goToPage(pageNum) {
            dispatch(goToPageThunk(pageNum))
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
        getUsers(current_id, currentPage){
            dispatch(getUsersThunk(current_id, currentPage))
        },
        disableButton(isFollowing, target_id){
            dispatch(disableButtonThunk(isFollowing, target_id))
        }
    }
}

const UsersItemContainer = connect(mapStateToProps, mapDispatchToProps)(UsersItem);

export default UsersItemContainer;