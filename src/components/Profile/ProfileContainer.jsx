import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfileThunk } from "../../redux/profileReducer";
import Profile from './Profile';

class ProfileContainer extends React.Component{

componentDidMount(){
    let userID = this.props.match.params.userID;
    if(!userID)userID=localStorage.getItem('VReacte');
    this.props.setUserProfile(userID);
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
            dispatch(setUserProfileThunk(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));

