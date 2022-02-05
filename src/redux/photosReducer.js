import { usersAPI } from "../API/api"
import { getUserDataActionCreator } from "./headerReducer";

const GET_PHOTOS = "photos/GET_PHOTOS";
const IS_FETCHING = 'photos/IS_FETCHING';
const CHANGE_AVATAR = 'photos/CHANGE_AVATAR';

const initialState={
    photos:[],
    isFetching: false,
    usersData:{}
}

export const photosReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_PHOTOS:{
            return {...state, photos: action.photos, usersData:action.usersData}
        }
        case IS_FETCHING:{
            return {...state, isFetching:!state.isFetching}
        }
        case CHANGE_AVATAR:{
            return {...state, usersData:action.usersData}
        }
        default: return state
    }
}

export const getPhotosActionCreator = (photos, usersData) => ({type: GET_PHOTOS, photos, usersData});
export const isFetchingActionCreator = () => ({type: IS_FETCHING});
export const changeAvatarActionCreator = usersData => ({type: CHANGE_AVATAR, usersData})

export const getPhotosThunk=id=>{
    return async (dispatch)=>{
        const responce = await usersAPI.addMyData(id);
        const photosArray = responce.data.photos.postedPhotos;
        dispatch(getPhotosActionCreator(photosArray, responce.data));
        dispatch(isFetchingActionCreator());
    }
}

export const addNewPhotoThunk=(photo, myData)=>{
    return async (dispatch)=>{
        dispatch(isFetchingActionCreator())
        const newPhoto = {
            id: Number(new Date()),
            date: new Date(),
            src: photo
        }
        const updatedPhotos = [...myData.photos.postedPhotos]
        updatedPhotos.unshift(newPhoto)
        const updatedData = {...myData}
        updatedData.photos={...updatedData.photos, postedPhotos:updatedPhotos}
        await usersAPI.updateUser(myData.id, updatedData)
        dispatch(getPhotosActionCreator(updatedPhotos, updatedData))
        dispatch(isFetchingActionCreator())
    }
}

export const deletePhotoThunk = (id, myData) => {
    return async (dispatch) => {
        dispatch(isFetchingActionCreator())
        const photos = [...myData.photos.postedPhotos]
        const updatedPhotos= photos.filter(el=>Number(el.id)!=Number(id))
        const updatedData = {...myData}
        updatedData.photos.postedPhotos=[...updatedPhotos]
        await usersAPI.updateUser(myData.id, updatedData)
        dispatch(getPhotosActionCreator(updatedPhotos, updatedData))
        dispatch(isFetchingActionCreator())
    }
}

export const changeAvatarThunk = (src, myData) => {
    return async (dispatch) => {
        dispatch(isFetchingActionCreator())
        const updatedData = {...myData}
        updatedData.photos.avatar=src
        await usersAPI.updateUser(myData.id, updatedData)
        dispatch(changeAvatarActionCreator(updatedData))
        dispatch(isFetchingActionCreator())
        dispatch(getUserDataActionCreator(updatedData))
    }
}