import React from "react";
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./PropfileInfo";
const Profile = (props) =>{
    return(
        <>
            <ProfileInfo name={props.name} DOB={props.DOB} location={props.location} status={props.status} links={props.links} avatar={props.avatar}/>
            <Posts />
        </>
        );
}

export default Profile;