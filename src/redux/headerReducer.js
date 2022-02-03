import { usersAPI } from "../API/api";

const GET_USER_DATA = 'header/GET_USER_DATA'

const initialState={
    userData:{},
    avatar:''
}

const headerReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_USER_DATA:{
            return{...state, userData:action.userData, avatar:action.userData.photos.avatar}
        }
        default: return state;
    }
}

export const getUserDataActionCreator = userData => ({type: GET_USER_DATA, userData})

export const getUserDataThunk = id =>{
    return async dispatch =>{
        const responce = await usersAPI.addMyData(id);
        dispatch(getUserDataActionCreator(responce.data));   
    }
}

export default headerReducer;