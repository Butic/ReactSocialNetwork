import React from "react";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Posts from "./MyPosts/Posts";
import ProfileInfoContainer from "./PropfileInfoContainer";
const Profile = () =>{
    return(
        <>
            <ProfileInfoContainer/>
            <Posts />
        </>
        );
}

export default withAuthRedirect(Profile);