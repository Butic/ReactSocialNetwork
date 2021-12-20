import React from "react";
import PostsContainer from "./MyPosts/PostsContainer";
import ProfileInfo from "./PropfileInfo";
const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo/>
            <PostsContainer profileData={props.profileData} dispatch={props.dispatch} />
        </div>
        );
}

export default Profile;