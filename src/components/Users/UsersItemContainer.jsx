import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { addMyDataActionCreator, disableButtonThunk, followUserThunk, getUsersThunk, goToPageThunk, toggleFetchingActionCreator, totalPagesCounterActionCreator, userListActionCreator } from "../../redux/usersReducer";
import { getCurrentPage, getCurrent_id, getIsFetching, getIsFollowing, getMyData, getSubscribes, getTotalPagesNumber, getUsers } from '../../selectors/usersSelectors';
import Users from "./Users";

const UsersItem =(props)=> {

    useEffect(()=>{
        props.getUsers(localStorage.getItem('VReacte'), props.currentPage);
    },[]);

    const followUser=(target_id)=>{
        isFollowing(target_id);
        props.follow(props.myData, target_id, props.isFollowing);
    }
    const goToPage = (pageNum) => {
        props.goToPage(pageNum);
    }

    const isFollowing=(target_id)=>{
        props.disableButton(props.isFollowing, target_id);
    }
        return <Users isFollowing={props.isFollowing} subscribes={props.myData.subscribes} current_id={props.current_id} followUser={followUser} goToPage={goToPage} users={props.users} totalPagesNumber={props.totalPagesNumber} currentPage={props.currentPage} />
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalPagesNumber: getTotalPagesNumber(state),
        isFetching: getIsFetching(state),
        current_id: getCurrent_id(state),
        subscribes: getSubscribes(state),
        isFollowing: getIsFollowing(state),
        myData: getMyData(state)
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