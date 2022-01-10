import React from 'react';
import { connect } from 'react-redux';
import { changeStatusThunk } from '../../redux/profileReducer';
import ProfileInfo from './ProfileInfo';

class ProfileInfoContainer extends React.Component {

    state={
        editMode: false,
        status: this.props.status
    }

    activateEditMode=()=>{
        if(!this.props.paramsID||Number(this.props.paramsID==Number(this.props.loggedID))){
            this.setState({
                editMode: true,
                status: this.state.status
            })   
        }
    }

    changeStatus=(e)=>{
        this.setState({
            status: e.target.value
        })
    }
    
    deactivateEditMode=()=>{
        this.setState({
            editMode: false
        })
        this.props.changeStatus(this.state.status, this.props.id)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status!=this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render(){
        return <ProfileInfo state={this.state} activateEditMode={this.activateEditMode} changeStatus={this.changeStatus} deactivateEditMode={this.deactivateEditMode} name={this.props.name} status={this.props.status} DOB={this.props.DOB} location={this.props.location} status={this.props.status} links={this.props.links} avatar={this.props.avatar} />
    }
};

const mapStateToProps=(state)=>{
    return{
        id:state.profileData.id,
        name:state.profileData.name,
        status:state.profileData.status,
        DOB:state.profileData.DOB,
        location:state.profileData.location,
        status:state.profileData.status,
        links:state.profileData.links,
        avatar:state.profileData.avatar
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeStatus(newStatus, id){
            dispatch(changeStatusThunk(newStatus, id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer);