import React from "react";
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./PropfileInfo";
const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo />
            <Posts />
        </div>
        );
}

export default Profile;