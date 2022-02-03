import { usersAPI } from "../API/api"

const GET_PHOTOS = "photos/GET_PHOTOS";
const IS_FETCHING = 'photos/IS_FETCHING';
const ADD_PHOTO = 'photos/ADD_PHOTO';

const initialState={
    photos:[],
    isFetching: false,
    usersData:{}
}

export const photosReducer =(state=initialState, action) => {
    switch(action.type){
        case GET_PHOTOS:{
            return {...state, photos: action.photos, usersData:action.usersData}
        }
        case IS_FETCHING:{
            return {...state, isFetching:!state.isFetching}
        }
        case ADD_PHOTO:{
            return {...state, photos: action.photos}
        }
        default: return state
    }
}

export const getPhotosActionCreator = (photos, usersData) => ({type: GET_PHOTOS, photos, usersData});
export const isFetchingActionCreator = () => ({type: IS_FETCHING});
export const addNewPhotoActionCreator = photos => ({type: ADD_PHOTO, photos})

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
        usersAPI.updateUser(myData.id, updatedData)
        dispatch(getPhotosActionCreator(updatedPhotos, updatedData))
        dispatch(isFetchingActionCreator())
    }
}