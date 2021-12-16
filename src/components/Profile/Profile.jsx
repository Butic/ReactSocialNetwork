import React from "react";
import PostsContainer from "./MyPosts/PostsContainer";
import ProfileInfo from "./PropfileInfo";
const Profile = () =>{
    return(
        <div>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
        );
}

export default Profile;