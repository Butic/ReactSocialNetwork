import React from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';

const SettingsContainer = (props) => {

    const isLoggedIn = localStorage.getItem('VReacte')?true:false;

    return <Settings userData={props.userData} isLoggedIn={isLoggedIn}/>
}

const mapStateToProps = state => {
    return{
        userData: state.headerData.userData
    }
}

const mapDispatchToProps = dispatch => {
    return{
        saveData(newData){
            
        }
    }
}

export default connect(mapStateToProps)(SettingsContainer);