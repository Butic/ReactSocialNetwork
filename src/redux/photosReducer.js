import { usersAPI } from "../API/api"

const ADD_PHOTOS = "photos/ADD_PHOTOS";
const IS_FETCHING = 'photos/IS_FETCHING';

const initialState={
    photos:[
        
    ],
    isFetching: false,
}

export const photosReducer =(state=initialState, action) => {
    switch(action.type){
        case ADD_PHOTOS:{
            return {...state, photos: action.photos}
        }
        case IS_FETCHING:{
            return {...state, isFetching:!state.isFetching}
        }
        default: return state
    }
}

export const getPhotosActionCreator = photos => ({type: ADD_PHOTOS, photos});
export const isFetchingActionCreator = () => ({type: IS_FETCHING});

export const getPhotosThunk=id=>{
    return async (dispatch)=>{
        const responce = await usersAPI.addMyData(id);
        const photosArray = responce.data.photos.postedPhotos;
        console.log(photosArray)
        dispatch(getPhotosActionCreator(photosArray));
        dispatch(isFetchingActionCreator());
    }
}