import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfileActionCreator } from "../../redux/profileReducer";
import Profile from './Profile';

class ProfileContainer extends React.Component{

componentDidMount(){
    let userID = this.props.match.params.userID;
    if(!userID)userID=1;
    axios.get(`http://localhost:8000/users/`+ userID).then(responce=>{
        this.props.setUserProfile(responce.data);
    })
}
    render(){
        return <Profile {...this.props.profileData}/>
    } 
}

const mapStateToProps=(state)=>{
    return{
        profileData:state.profileData
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setUserProfile(data){
            dispatch(setUserProfileActionCreator(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));

