import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addFollowersThunk } from '../../../redux/followersReducer';
import classes from './FollowersItem.module.css';
import Avatar from '../../Avatar/Avatar';
import { NavLink } from 'react-router-dom';

const FollowersItem = (props) =>{
    useEffect(()=>{
        props.setFollowers(localStorage.getItem('VReacte'));
    }, [])
    return(
        props.followers.map(el=>{   
            return (
                <NavLink className={classes.NavLink} to={`/profile/${el.id}`} key={el.id}>
                    <li className={classes.FriendItem}><Avatar avatar={el.photos.avatar}/> {el.name} <span className={classes.Status}>{el.status}</span></li>
                </NavLink>
            )
        })
    );
}

const mapStateToProps=(state)=>{
    return{
        followers: state.followersData.followers
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setFollowers(id){
            dispatch(addFollowersThunk(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowersItem);