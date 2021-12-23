import React from 'react';
import { connect } from 'react-redux';
import ChartMessages from './ChartMessages';

const mapStateToProps=(state)=>{
    return{
        messages: state.dialogData.messages
    }
}

const ChartMessagesContainer = connect(mapStateToProps)(ChartMessages);

export default ChartMessagesContainer;