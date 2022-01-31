import { usersAPI } from "../API/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_SENDERS_DATA = 'profile/SET_SENDERS_DATA';
const DELETE_POST = 'profile/DELETE_POST';
const CHANGE_STATUS = 'profile/CHANGE_STATUS';
const GET_MY_SUBSCRIBES = 'profile/GET_MY_SUBSCRIBES';
const FOLLOW = 'profile/FOLLOW';
const DISABLE_BUTTON = 'profile/DISABLE_BUTTON';
const ADD_POST_LIKE = 'profile/ADD_POST_LIKE';

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
    senderAvatar:"",
    isDisabled: false,
    isSubscribed: false,
    myData:{}
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
                avatar: action.data.photos.avatar,
                myData: action.isMe && action.data
            }
        }
        case SET_SENDERS_DATA: {
            return { ...state, senderName: action.senderData.name, senderAvatar: action.senderData.photos.avatar }
        }
        case CHANGE_STATUS: {
            return { ...state, status: action.newStatus }
        }
        case GET_MY_SUBSCRIBES: {
            return {...state, isSubscribed:action.isSubscribed, myData:action.myData}
        }
        case FOLLOW:{
            return { ...state, isSubscribed:!state.isSubscribed, myData: { ...action.updatedUser } }
        }
        case DISABLE_BUTTON: {
            return { ...state, isDisabled:!state.isDisabled }
        }
        case ADD_POST_LIKE: {
            return { ...state, posts:action.newPosts}
        }
        default: return state;
    }
}

export const addPostActionCreator = newAddedPost => ({ type: ADD_POST, newAddedPost});
export const deletePostActionCreator = target_post_ID => ({ type: DELETE_POST, target_post_ID });
export const setUserProfileActionCreator = (data, isMe) => ({ type: SET_USER_PROFILE, data, isMe });
export const setSendersDataActionCreator = senderData => ({ type: SET_SENDERS_DATA, senderData });
export const changeStatusActionCreator = newStatus => ({ type: CHANGE_STATUS, newStatus });
export const amISubscribedActionCreator = (isSubscribed, myData) => ({type:GET_MY_SUBSCRIBES, isSubscribed, myData});
export const followActionCreator = updatedUser => ({ type: FOLLOW, updatedUser });
export const disableButtonActionCreator = () => ({ type: DISABLE_BUTTON });
export const addPostLikesActionCreator = newPosts => ({type: ADD_POST_LIKE, newPosts});

export const setUserProfileThunk = (userID, isMe) => {
    return async (dispatch) => {
        const responce = await usersAPI.addMyData(userID);
        dispatch(setUserProfileActionCreator(responce.data, isMe));
    }
}

export const addPostThunk = (targetID, senderName, senderAvatar, newPost) => {
    return async (dispatch) => {
        const newAddedPost = {
            id: new Date(),
            senderID: localStorage.getItem('VReacte'),
            senderName: senderName,
            senderAvatar: senderAvatar,
            date: new Date().toLocaleString(),
            title: newPost.title,
            text: newPost.text,
            likes: []
        };
        const responce = await usersAPI.addMyData(targetID);
        const array1 = responce.data.posts;
        console.log(newAddedPost.senderAvatar)
        array1.unshift(newAddedPost);
        await usersAPI.updateUser(targetID, { ...responce.data, posts: [...array1] });
        dispatch(addPostActionCreator(newAddedPost));
    }
}

export const setSenderNameThunk = (senderID) => {
    return async (dispatch) => {
        const responce = await usersAPI.addMyData(senderID)
        dispatch(setSendersDataActionCreator(responce.data));
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

export const amISubscribedThunk = (id, myId) => {
    return async (dispatch) => {
        const responce = await usersAPI.addMyData(myId);
        dispatch(amISubscribedActionCreator(responce.data.subscribes.includes(Number(id)), responce.data))
    }
}

export const followUserThunk = (myData, target_id) => {
    return async (dispatch) => {
        dispatch(disableButtonActionCreator());
        if (!myData.subscribes.includes(Number(target_id))) {
            const newData = { ...myData, subscribes: [...myData.subscribes, Number(target_id)] };
            const responce = await usersAPI.updateUser(myData.id, newData);
            dispatch(followActionCreator(responce.data));
            dispatch(disableButtonActionCreator());
        }
        else {
            const newData = { ...myData, subscribes: [...myData.subscribes.filter(el => el != Number(target_id))] };
            const responce = await usersAPI.updateUser(myData.id, newData);
            dispatch(followActionCreator(responce.data));
            dispatch(disableButtonActionCreator());
        }
    }
}

export const addPostLikeThunk = (myID, post_id) =>{
    return async (dispatch) => {
        const responce = await usersAPI.addMyData(myID);
        const posts = responce.data.posts;
        posts.map(el=>{
            if(el.id==post_id){
                if (el.likes.includes(myID)) el.likes=el.likes.filter(elem=>elem!=myID)
                else el.likes.push(myID)
            }
        })
        const newData = {...responce.data, posts:posts}
        const responce2 = await usersAPI.updateUser(myID, newData)
        dispatch(addPostLikesActionCreator(posts))
    }
}

export default profileReducer;