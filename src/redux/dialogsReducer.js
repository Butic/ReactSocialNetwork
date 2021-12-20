const CHANGE_MESSAGE_AREA = 'CHANGE-MESSAGE-AREA';
const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';

const dialogsReducer = (state, action) =>{
    if(action.type === CHANGE_MESSAGE_AREA){
        state.newMessage = action.text;
    }
    else if(action.type === ADD_MY_MESSAGE){
        state.messages.unshift({id:1, me:true, message:state.newMessage, date:Date.now()});
    }
    return state;
}

export const changeMessageAreaCreator=(text)=>({type:CHANGE_MESSAGE_AREA, text:text});
export const addMyMessageCreator=()=>({type:ADD_MY_MESSAGE});

export default dialogsReducer;