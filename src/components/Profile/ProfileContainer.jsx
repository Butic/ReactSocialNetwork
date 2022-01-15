import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { amISubscribedThunk, setUserProfileThunk } from "../../redux/profileReducer";
import Profile from './Profile';

class ProfileContainer extends React.Component{

componentDidMount(){
    let userID = this.props.match.params.userID;
    const myId = localStorage.getItem('VReacte');
    
    if(!userID || Number(userID)==Number(myId)) this.props.setUserProfile(myId, true)
    else this.props.setUserProfile(userID, false);
        
    if(Number(userID) && Number(userID)!=Number(myId)) this.props.amISubscribed(userID, myId);
}
    render(){
        return <Profile />
    } 
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setUserProfile(data, isMe){
            dispatch(setUserProfileThunk(data, isMe))
        },
        amISubscribed(id, myId){
            dispatch(amISubscribedThunk(id, myId))
        }
    }
}

export default compose(withRouter, connect(null, mapDispatchToProps))(ProfileContainer);

