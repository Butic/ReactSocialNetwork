import { usersAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_SENDER_NAME = 'SET_SENDER_NAME';
const DELETE_POST = 'DELETE_POST';
const CHANGE_STATUS = 'CHANGE_STATUS';

const lorem = 'dolor sit amet consectetur adipisicing elit. Minima accusantium maxime magni atque deserunt? Doloribus unde dolores, molestias, suscipit enim molestiae dignissimos dolorum quidem aliquid soluta incidunt officiis dolor nihil.';

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
    newPost: { newPostTitle: 'Andrey', newPostText: 'Web Developer' },
    senderName: "",
    isFetching: false
};

const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newState = { ...state };
            newState.posts = [...state.posts];
            newState.newPost = { ...state.newPost };
            newState.posts.unshift(action.newAddedPost);
            newState.newPost.newPostTitle = '';
            newState.newPost.newPostText = '';
            return newState;
        }
        case DELETE_POST: {
            return { ...state, posts: [...state.posts.filter(el => el.id != action.target_post_ID)] };
        }
        case ON_POST_CHANGE: {
            return { ...state, newPost: { newPostTitle: action.title, newPostText: action.text } };
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
        case CHANGE_STATUS:{
            return { ...state, status:action.newStatus }
        }
        default: return state;
    }

}

export const addPostActionCreator = (newAddedPost) => ({ type: ADD_POST, newAddedPost: newAddedPost });
export const deletePostActionCreator = (target_post_ID) => ({ type: DELETE_POST, target_post_ID: target_post_ID });
export const onPostChangeActionCreator = (title, text) => ({ type: ON_POST_CHANGE, title: title, text: text });
export const setUserProfileActionCreator = (data) => ({ type: SET_USER_PROFILE, data: data });
export const setSenderNameActionCreator = (senderName) => ({ type: SET_SENDER_NAME, senderName: senderName });
export const changeStatusActionCreator = (newStatus) => ({type:CHANGE_STATUS, newStatus:newStatus});

export const setUserProfileThunk = (userID) => {
    return (dispatch) => {
        if (!userID) userID = localStorage.getItem('VReacte');
        usersAPI.addMyData(userID).then(responce => {
            dispatch(setUserProfileActionCreator(responce.data));
        })
    }
}

export const addPostThunk = (targetID, senderName, newPost) => {
    return (dispatch) => {
        const newAddedPost = {
            id: new Date(),
            senderID: localStorage.getItem('VReacte'),
            senderName: senderName,
            date: new Date().toLocaleString(),
            title: newPost.title,
            text: newPost.text,
            likes: 0
        };

        usersAPI.addMyData(targetID)
            .then(responce => {
                const array1 = responce.data.posts;
                array1.unshift(newAddedPost)
                usersAPI.updateUser(targetID, { ...responce.data, posts: [...array1] })
                    .then(() => {
                        dispatch(addPostActionCreator(newAddedPost))
                    })
            })
    }
}

export const setSenderNameThunk = (senderID) => {
    return (dispatch) => {
        usersAPI.addMyData(senderID).then(responce => {
            dispatch(setSenderNameActionCreator(responce.data.name));
        })
    }
}

export const deletePostThunk = (targetID, target_post_ID) => {
    return (dispatch) => {
        usersAPI.addMyData(targetID)
            .then(responce => {
                usersAPI.updateUser(targetID, { ...responce.data, posts: [...responce.data.posts.filter(el => el.id != target_post_ID)] })
                    .then(() => {
                        dispatch(deletePostActionCreator(target_post_ID))
                    })
            })
    }
}

export const changeStatusThunk=(newStatus, id)=>{
    return (dispatch)=>{
        usersAPI.addMyData(id)
        .then(responce=>{
            usersAPI.updateUser(id, {...responce.data, status:newStatus})
            .then(()=>{
                dispatch(changeStatusActionCreator(newStatus));
            })
        })
    }
}

export default profileReducer;