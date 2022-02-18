import { Redirect } from "react-router-dom";
import { usersAPI } from "../API/api";
import { onLoginActionCreator, onLogOutActionCreator } from "./loginReducer";

const GET_USER_DATA = 'header/GET_USER_DATA';
const IS_FETCHING = 'login/IS_FETCHING';

const initialState={
    userData:{},
    avatar:'',
    isFetching: false
}

const headerReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_USER_DATA:{
            return{...state, userData:action.userData, avatar:action.userData.photos.avatar}
        }
        case IS_FETCHING:{
            return {...state, isFetching:!state.isFetching}
        }
        default: return state;
    }
}

export const getUserDataActionCreator = userData => ({type: GET_USER_DATA, userData});
export const isFetchingActionCreator = () => ({type: IS_FETCHING});

export const getUserDataThunk = id =>{
    return async dispatch =>{
        const responce = await usersAPI.addMyData(id);
        dispatch(getUserDataActionCreator(responce.data));   
    }
}

export const updateDataThunk = (previousData, newData) =>{
    return async dispatch=>{
        dispatch(isFetchingActionCreator())
        const newUsersData={...previousData};
        newUsersData.email=newData.email;
        newUsersData.password=newData.password;
        newUsersData.name=newData.name;
        newUsersData.DOB=newData.DOB;
        newUsersData.location=newData.location;
        newUsersData.links=newData.links;
        await usersAPI.updateUser(previousData.id, newUsersData);
        dispatch(getUserDataActionCreator(newUsersData));
        dispatch(isFetchingActionCreator());
        alert('Your data has been updated')
    }
}

export const createNewUser = (data) =>{
    return async dispatch=>{
        dispatch(isFetchingActionCreator())
        const newUser={
                id: Number(new Date()),
                email: data.email,
                password: data.password,
                name: data.name,
                DOB: {
                  date: data.DOB.date,
                  month: data.DOB.month,
                  year: data.DOB.year
                },
                location: {
                  country: data.location.country,
                  sity: data.location.sity
                },
                status: '',
                links: {
                  vk: data.links.vk,
                  instagram: data.links.instagram
                },
                followers: [],
                subscribes: [],
                posts: [],
                photos: {}
              }
              await usersAPI.addUser(newUser);
              localStorage.setItem('VReacte', newUser.id);
              dispatch(getUserDataActionCreator(newUser));
              dispatch(onLoginActionCreator())
        }
    }

export default headerReducer;