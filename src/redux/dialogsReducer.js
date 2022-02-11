import { dialogsAPI, usersAPI } from "../API/api";

const ADD_MY_MESSAGE = 'dialogs/ADD_MY_MESSAGE';
const GET_ALL_DIALOGS = 'dialogs/GET_ALL_DIALOGS';
const GET_OPPONENTS_DATA = 'dialogs/GET_OPPONENTS_DATA';
const SET_TARGETED_USER_ID = 'dialogs/SET_TARGETED_USER_ID';
const ADD_NEW_OPPPONENT = 'dialogs/ADD_NEW_OPPPONENT';

const initialState = {
      dialogs:[],
      opponentsID:[],
      opponents:[],
      targetedUserId: null
};

const dialogsReducer = (state=initialState, action) =>{
    switch (action.type){
        case ADD_MY_MESSAGE:{
            return {...state, dialogs:action.dialogs, opponents:[...state.opponents]}
        }
        case GET_ALL_DIALOGS:{
            return {...state, dialogs:action.dialogs, opponentsID:action.opponentsID}
        }
        case GET_OPPONENTS_DATA:{
            return {...state, opponents:action.opponents}
        }
        case ADD_NEW_OPPPONENT:{
            return {...state, opponents:[...state.opponents, action.opponent]}
        }
        case SET_TARGETED_USER_ID:{
            return{...state, targetedUserId:action.targetedUserId}
        }
        default: return state
    }
}

export const addMyMessageActionCreator=dialogs=>({type:ADD_MY_MESSAGE, dialogs});
export const getAllDialogsActionCreator=(dialogs, opponentsID)=>({type:GET_ALL_DIALOGS, dialogs, opponentsID});
export const getOpponentsDataActionCreator=opponents=>({type:GET_OPPONENTS_DATA, opponents});
export const setTargetIdActionCreator=targetedUserId=>({type: SET_TARGETED_USER_ID, targetedUserId});
export const addNewOpponentDataActionCreator=opponent=>({type: ADD_NEW_OPPPONENT, opponent})

export const getAllDialogsThunk = (myID) => {
    return async dispatch => {
        const responce = await dialogsAPI.getAllDialogs();
        const myDialogs = [];
        const opponents = [];
        responce.data.map(el=>{
            const idArray = el.id.split("and")
            if(idArray[0]==myID||idArray[1]==myID){
                myDialogs.push(el);
                if(idArray[0]==myID) opponents.push(idArray[1])
                else opponents.push(idArray[0])
            }
        })
        dispatch(getAllDialogsActionCreator(myDialogs, [...new Set(opponents)]));
    }
}

export const getOpponentsDataThunk = (opponentsID) =>{
    return async dispatch=>{
        const opponents=[];
        for(let i=0; i<opponentsID.length; i++){
            const responce = await usersAPI.addMyData(opponentsID[i])
            opponents.push(responce.data)
        }
        dispatch(getOpponentsDataActionCreator(opponents))
    }
}

export const addNewOpponentDataThunk = (opponentID)=>{
    return async dispatch =>{
        const responce = await usersAPI.addMyData(opponentID)
        dispatch(addNewOpponentDataActionCreator(responce.data))
    }
}

export const addMyMessageThunk = (message, myID, opponentID, dialogs, isMyDialogExists, isOpponentsDialogExists)=>{
    return async dispatch=>{
        const newMessage = {
            id: new Date().toLocaleString(),
            sender_id: myID,
            text: message
        }
        const myDialogID=`${myID}and${opponentID}`;
        const opponentsDialogID=`${opponentID}and${myID}`;
        const newDialogs = [...dialogs];
        let myDialog = {};
        let opponentsDialog = {};
        newDialogs.map(el=>{
            if(el.id==myDialogID){
                const newDialog = [...el.dialog]
                newDialog.unshift(newMessage)
                el.dialog=newDialog
                el.lastMessageDate=Number(new Date())
                myDialog = el;
            }
            if(el.id==opponentsDialogID){
                const newDialog = [...el.dialog]
                newDialog.unshift(newMessage)
                el.dialog=newDialog
                el.lastMessageDate=Number(new Date())
                opponentsDialog = el;
            }
        })

        if(isMyDialogExists&&isOpponentsDialogExists){
            await dialogsAPI.updateDialog(myDialog.id, myDialog);
            await dialogsAPI.updateDialog(opponentsDialog.id, opponentsDialog);
            dispatch(addMyMessageActionCreator(newDialogs));
        }
        else if(isMyDialogExists&&!isOpponentsDialogExists){
            const newOpponentsDialog = {
                id: opponentsDialogID,
                lastMessageDate: Number(new Date()),
                dialog: [newMessage]
            }
            newDialogs.push(newOpponentsDialog);
            await dialogsAPI.updateDialog(myDialog.id, myDialog);
            await dialogsAPI.addDailog(newOpponentsDialog);
            dispatch(addMyMessageActionCreator(newDialogs));
        }
        else if(!isMyDialogExists&&isOpponentsDialogExists){
            const newMyDialog = {
                id: myDialogID,
                lastMessageDate: Number(new Date()),
                dialog: [newMessage]
            }
            newDialogs.push(newMyDialog);
            await dialogsAPI.updateDialog(opponentsDialog.id, opponentsDialog);
            await dialogsAPI.addDailog(newMyDialog);
            dispatch(addMyMessageActionCreator(newDialogs));
        }
        else{
            const newMyDialog = {
                id: myDialogID,
                lastMessageDate: Number(new Date()),
                dialog: [newMessage]
            }
            const newOpponentsDialog = {
                id: opponentsDialogID,
                lastMessageDate: Number(new Date()),
                dialog: [newMessage]
            }
            newDialogs.push(newMyDialog);
            newDialogs.push(newOpponentsDialog)
            await dialogsAPI.addDailog(newMyDialog);
            await dialogsAPI.addDailog(newOpponentsDialog);
            dispatch(addMyMessageActionCreator(newDialogs));
        }
    }
}

export default dialogsReducer;