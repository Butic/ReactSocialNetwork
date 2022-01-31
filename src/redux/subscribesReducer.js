import { usersAPI } from "../API/api";

const ADD_SUBSCRIBES_DATA = "subscribes/ADD_SUBSCRIBES_DATA";

const initialState = {
    subscribes:[]
}

const subscribesReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_SUBSCRIBES_DATA: {
          return {...state, subscribes: action.subscribes}
        }
        default: return state;
    } 
}

export const addSubscribesActionCreator=subscribes=>({type: ADD_SUBSCRIBES_DATA, subscribes})

export const addSubscribesThunk=(id)=>{
    return async (dispatch) => {
        const responce = await usersAPI.addMyData(id);
        const subscribesArray = responce.data.subscribes;
        const newArray=[];
        for (let i=0; i<subscribesArray.length; i++){
            const userData = await usersAPI.addMyData(subscribesArray[i]);
            newArray.push(userData.data);
        }
        dispatch(addSubscribesActionCreator(newArray))
    }
}

export default subscribesReducer;