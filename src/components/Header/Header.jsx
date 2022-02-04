import React, { useEffect } from "react";
import classes from './Header.module.css';
import Avatar from '../Avatar/Avatar';
import logo from '../UI/img/logo.png';
import { connect } from "react-redux";
import { onLogOutActionCreator } from "../../redux/loginReducer";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { getUserDataThunk } from "../../redux/headerReducer";

const Header = (props) =>{

    useEffect(()=>{
        props.getAvatar(localStorage.getItem('VReacte'))
    },[])
    return(
        <header className={classes.Header}>
            <img className={classes.Header__logo} src={logo} alt="Header Logo" />
            <h1 className={classes.Header__title}><h1 className={classes.Header__V}>V</h1>Reacte</h1>
            <div className={classes.Header__profile}>
            <NavLink to={'/profile'}><Avatar avatar={props.avatar}/></NavLink>
            <ul className={classes.Header__profile_list}>
                <NavLink to={'/profile'}><li className={classes.Header__MyProfile}>My profile</li></NavLink> 
                <li className={classes.Header__exit} onClick={()=>{ localStorage.removeItem('VReacte'); props.logOut() }}>Log Out</li>
            </ul>
            </div>
        </header>
    );
}

const mapStateToProps=(state)=>{
    return{
        avatar: state.headerData.avatar
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        logOut(){
            dispatch(onLogOutActionCreator());
        },
        getAvatar(id){
            dispatch(getUserDataThunk(id))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Header);