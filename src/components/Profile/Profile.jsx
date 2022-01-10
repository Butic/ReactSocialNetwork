import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Posts from "./MyPosts/Posts";
import ProfileInfoContainer from "./PropfileInfoContainer";
const Profile = (props) =>{
    return(
        <>
            <ProfileInfoContainer paramsID={props.match.params.userID} loggedID={props.loggedID}/>
            <Posts />
        </>
        );
}

export default compose(withRouter, withAuthRedirect)(Profile);