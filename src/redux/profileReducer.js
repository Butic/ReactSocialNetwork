import { usersAPI } from "../API/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_SENDER_NAME = 'profile/SET_SENDER_NAME';
const DELETE_POST = 'profile/DELETE_POST';
const CHANGE_STATUS = 'profile/CHANGE_STATUS';

const initalState = {
    id: '',
    name: "",
    DOB: {
        date: '',
        month: "",
        year: ""
    },
    location: {
        country: "",
        sity: ""
    },
    status: "",
    links: {
        vk: "",
        instagram: ""
    },
    avatar: '',
    posts: [],
    senderName: "",
    isFetching: false
};

const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newState = { ...state };
            newState.posts = [...state.posts];
            newState.posts.unshift(action.newAddedPost);
            return newState;
        }
        case DELETE_POST: {
            return { ...state, posts: [...state.posts.filter(el => el.id != action.target_post_ID)] };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                id: action.data.id, name: action.data.name,
                DOB: { ...state.DOB, date: action.data.DOB.date, month: action.data.DOB.month, year: action.data.DOB.year },
                location: { ...state.location, country: action.data.location.country, sity: action.data.location.sity },
                status: action.data.status, links: action.data.links, posts: [...action.data.posts], newPost: state.newPost,
                avatar: action.data.photos.avatar
            }
        }
        case SET_SENDER_NAME: {
            return { ...state, senderName: action.senderName }
        }
        case CHANGE_STATUS: {
            return { ...state, status: action.newStatus }
        }
        default: return state;
    }

}

export const addPostActionCreator = newAddedPost => ({ type: ADD_POST, newAddedPost});
export const deletePostActionCreator = target_post_ID => ({ type: DELETE_POST, target_post_ID });
export const setUserProfileActionCreator = data => ({ type: SET_USER_PROFILE, data });
export const setSenderNameActionCreator = senderName => ({ type: SET_SENDER_NAME, senderName });
export const changeStatusActionCreator = newStatus => ({ type: CHANGE_STATUS, newStatus });

export const setUserProfileThunk = (userID) => {
    return async (dispatch) => {
        if (!userID) userID = localStorage.getItem('VReacte');
        const responce = await usersAPI.addMyData(userID);
        dispatch(setUserProfileActionCreator(responce.data));
    }
}

export const addPostThunk = (targetID, senderName, newPost) => {
    return async (dispatch) => {
        const newAddedPost = {
            id: new Date(),
            senderID: localStorage.getItem('VReacte'),
            senderName: senderName,
            date: new Date().toLocaleString(),
            title: newPost.title,
            text: newPost.text,
            likes: 0
        };
        const responce = await usersAPI.addMyData(targetID);
        const array1 = responce.data.posts;
        array1.unshift(newAddedPost);
        await usersAPI.updateUser(targetID, { ...responce.data, posts: [...array1] });
        dispatch(addPostActionCreator(newAddedPost));
    }
}

export const setSenderNameThunk = (senderID) => {
    return async (dispatch) => {
        const responce = await usersAPI.addMyData(senderID)
        dispatch(setSenderNameActionCreator(responce.data.name));
    }
}

export const deletePostThunk = (targetID, target_post_ID) => {
    return async (dispatch) => {
        const responce = await usersAPI.addMyData(targetID);
        await usersAPI.updateUser(targetID, { ...responce.data, posts: [...responce.data.posts.filter(el => el.id != target_post_ID)] });
        dispatch(deletePostActionCreator(target_post_ID));
    }
}

export const changeStatusThunk = (newStatus, id) => {
    return async (dispatch) => {
        const responce = await usersAPI.addMyData(id);
        await usersAPI.updateUser(id, { ...responce.data, status: newStatus });
        dispatch(changeStatusActionCreator(newStatus));
    }
}

export default profileReducer;