import { usersAPI } from "../API/api";

const ADD_FOLLOWERS_DATA = "followers/ADD_FOLLOWERS_DATA";

const initialState = {
    followers:[]
}

const followersReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_FOLLOWERS_DATA: {
          return {...state, followers: action.followers}
        }
        default: return state;
    } 
}

export const addFollowersActionCreator=followers=>({type: ADD_FOLLOWERS_DATA, followers})

export const addFollowersThunk=(id)=>{
    return async (dispatch) => {
        const responce = await usersAPI.addMyData(id);
        const followersArray = responce.data.followers;
        const newArray=[];
        for (let i=0; i<followersArray.length; i++){
            const userData = await usersAPI.addMyData(followersArray[i]);
            newArray.push(userData.data);
        }
        dispatch(addFollowersActionCreator(newArray))
    }
}

export default followersReducer;