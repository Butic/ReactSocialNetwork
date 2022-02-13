import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { amISubscribedThunk, setUserProfileThunk } from "../../redux/profileReducer";
import Profile from './Profile';

const ProfileContainer =(props)=>{
    let userID = props.match.params.userID;
    const myId = localStorage.getItem('VReacte');
    useEffect(()=>{
        if(!userID || Number(userID)==Number(myId)) props.setUserProfile(myId, true)
        else props.setUserProfile(userID, false, myId);
        if(Number(userID) && Number(userID)!=Number(myId)) props.amISubscribed(userID, myId);
    },[props.currentID])
    if(userID!=props.currentID)props.setUserProfile(myId, true)
    return <Profile />
}
const mapStateToProps=(state)=>{
    return{
        currentID: state.profileData.id
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        setUserProfile(data, isMe, myId){
            dispatch(setUserProfileThunk(data, isMe, myId))
        },
        amISubscribed(id, myId){
            dispatch(amISubscribedThunk(id, myId))
        }
    }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ProfileContainer);

