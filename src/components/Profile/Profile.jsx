import React from "react";
import PostsContainer from "./MyPosts/PostsContainer";
import ProfileInfo from "./PropfileInfo";
const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo/>
            <PostsContainer postData={props.postData}/>
        </div>
        );
}

export default Profile;