import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addSubscribesThunk } from '../../../redux/subscribesReducer';
import classes from './SubscribesItem.module.css';
import Avatar from '../../Avatar/Avatar';
import { NavLink } from 'react-router-dom';

const SubscribesItem = (props) =>{
    useEffect(()=>{
        props.setSubscribes(localStorage.getItem('VReacte'));
    }, [])
    return(
        props.subscribes.map(el=>{
            
            return (
                <NavLink className={classes.NavLink} to={`/profile/${el.id}`} key={el.id}>
                    <li className={classes.FriendItem}><Avatar avatar={el.photos.avatar}/> {el.name}  <span className={classes.Status}>{el.status}</span></li>
                </NavLink>
            )
        })
    );
}

const mapStateToProps=(state)=>{
    return{
        subscribes: state.subscribesData.subscribes
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setSubscribes(id){
            dispatch(addSubscribesThunk(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribesItem);