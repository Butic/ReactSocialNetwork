import React from 'react';
import { connect } from 'react-redux';
import DialogMembers from './DialogMembers';

const mapStateToProps = (state) =>{
    return{
        chartMembers: state.dialogData.chartMembers
    }
}

const DialogMembersContainer = connect(mapStateToProps)(DialogMembers);

export default DialogMembersContainer;