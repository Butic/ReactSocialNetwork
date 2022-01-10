import React from 'react';
import { connect } from 'react-redux';
import ChartMessages from './ChartMessages';

const mapStateToProps=(state)=>{
    return{
        messages: state.dialogData.messages
    }
}

export default connect(mapStateToProps)(ChartMessages);