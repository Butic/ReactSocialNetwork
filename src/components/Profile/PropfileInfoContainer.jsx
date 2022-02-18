import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { changeStatusThunk, followUserThunk } from '../../redux/profileReducer';
import ProfileInfo from './ProfileInfo';
import {getAvatar, getDOB, getId, getLinks, getLocation, getMyId, getMyData, getName, getStatus, getSubscribed, getIsDisabled} from '../../selectors/profileSelector'

const ProfileInfoContainer = (props)=> {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);

    const activateEditMode=()=>{
        Number(props.myID)==Number(props.id) && setEditMode(true);
    }

    const setStatusValue=(e)=>{
        setStatus(e.target.value);
    }
    
    const deactivateEditMode=()=>{
        setEditMode(false);
        props.changeStatus(status, props.id)
    }
    const followUser=()=>{
        props.followUser(props.myData, props.id)
    }

    return <ProfileInfo key={props.id} id={props.id} followUser={followUser} isDisabled={props.isDisabled} myID={props.myID} isSubscribed={props.isSubscribed} editMode={editMode} stateStatus={status} activateEditMode={activateEditMode} setStatusValue={setStatusValue} deactivateEditMode={deactivateEditMode} name={props.name} status={props.status} DOB={props.DOB} location={props.location} status={props.status} links={props.links} avatar={props.avatar} />
};

const mapStateToProps=(state)=>{
    return{
        id: getId(state),
        name: getName(state),
        status: getStatus(state),
        DOB: getDOB(state),
        location: getLocation(state),
        links: getLinks(state),
        avatar: getAvatar(state),
        isSubscribed: getSubscribed(state),
        myID: getMyId(state)?getMyId(state):null,
        isDisabled: getIsDisabled(state),
        myData: getMyData(state)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeStatus(newStatus, id){
            dispatch(changeStatusThunk(newStatus, id));
        },
        followUser(myData, target_id){
            dispatch(followUserThunk(myData, target_id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer);