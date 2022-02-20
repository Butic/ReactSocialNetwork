import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { updateDataThunk } from '../../redux/headerReducer';
import Settings from './Settings';

const SettingsContainer = (props) => {

    const updateData=(newData)=>{
        props.updateData(props.userData, newData);
    }

    return <Settings userData={props.userData} updateData={updateData}/>
}

const mapStateToProps = state => {
    return{
        userData: state.headerData.userData
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateData(previousData, newData){
            dispatch(updateDataThunk(previousData, newData))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(SettingsContainer);