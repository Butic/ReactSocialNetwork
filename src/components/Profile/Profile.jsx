import React from "react";
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./PropfileInfo";
const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo/>
            <Posts profileData={props.profileData} dispatch={props.dispatch} />
        </div>
        );
}

export default Profile;