import React from 'react';
import { connect } from 'react-redux';
import DialogMembers from './DialogMembers';

const mapStateToProps = (state) =>{
    return{
        chartMembers: state.dialogData.chartMembers
    }
}

export default connect(mapStateToProps)(DialogMembers);