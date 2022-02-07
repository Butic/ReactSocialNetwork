import { dialogsAPI, usersAPI } from "../API/api";

const ADD_MY_MESSAGE = 'dialogs/ADD_MY_MESSAGE';
const GET_ALL_DIALOGS = 'dialogs/GET_ALL_DIALOGS';
const GET_OPPONENTS_DATA = 'dialogs/GET_OPPONENTS_DATA';


const lorem = 'dolor sit amet consectetur adipisicing elit. Minima accusantium maxime magni atque deserunt? Doloribus unde dolores, molestias, suscipit enim molestiae dignissimos dolorum quidem aliquid soluta incidunt officiis dolor nihil.';

const initialState = {
    messages: [
        {id:1, me:true, message:lorem, date:116735615},
        {id:1, me:false, message:lorem+lorem, date:117581851},
        {id:1, me:true, message:lorem+lorem, date:135177123},
        {id:1, me:true, message:lorem+lorem+lorem, date:1156813123},
        {id:1, me:false, message:lorem+lorem, date:1525561253},
        {id:1, me:false, message:lorem+lorem, date:53743517651},
        {id:1, me:true, message:lorem+lorem, date:86535128521},
        {id:1, me:false, message:lorem+lorem+lorem, date:1113123151},
        {id:1, me:true, message:lorem+lorem, date:1127275162},
        {id:1, me:false, message:lorem+lorem, date:1341216651}
      ],
      dialogs:[],
      opponentsID:[],
      opponents:[]
};

const dialogsReducer = (state=initialState, action) =>{
    switch (action.type){
        case ADD_MY_MESSAGE:{
            const newState = {...state};
            newState.messages=[...state.messages];
            newState.messages.unshift({id:1, me:true, message:action.message, date:new Date().toLocaleString()});
            return newState;
        }
        case GET_ALL_DIALOGS:{
            return {...state, dialogs:action.dialogs, opponentsID:action.opponentsID}
        }
        case GET_OPPONENTS_DATA:{
            return {...state, opponents:action.opponents}
        }
        default: return state
    }
}

export const addMyMessageCreator=(message)=>({type:ADD_MY_MESSAGE, message});
export const getAllDialogsActionCreator=(dialogs, opponentsID)=>({type:GET_ALL_DIALOGS, dialogs, opponentsID});
export const getOpponentsDataActionCreator=opponents=>({type:GET_OPPONENTS_DATA, opponents})

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

export default dialogsReducer;