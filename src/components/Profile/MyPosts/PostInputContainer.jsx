import React from "react";
import { connect } from "react-redux";
import { addPostThunk, setSenderNameThunk } from "../../../redux/profileReducer";
import PostInput from "./PostInput";
import { withRouter } from "react-router-dom";

class PostInputContainer extends React.Component{

    componentDidMount(){
        this.props.setSenderName(localStorage.getItem('VReacte'));
    }

    addNewPost=(newPost)=>{
        this.props.addPost(this.props.match.params.userID?this.props.match.params.userID:localStorage.getItem('VReacte'), this.props.senderName, newPost)
    }

    render(){
        return <PostInput addPost={this.addNewPost}/>
    }

}

const mapStateToProps=(state)=>{
    return{
        senderName: state.profileData.senderName
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addPost(targetID, senderName="Incognito", newPost){
            dispatch(addPostThunk(targetID, senderName, newPost));
        },
        setSenderName(senderID){
            dispatch(setSenderNameThunk(senderID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostInputContainer));