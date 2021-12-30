const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPost: { newPostTitle: 'Andrey', newPostText: 'Web Developer' }
};

const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newState = { ...state };
            newState.posts = [...state.posts];
            newState.newPost = { ...state.newPost };
            const newAddedPost = {
                date: new Date().toLocaleString(),
                title: newState.newPost.newPostTitle,
                text: newState.newPost.newPostText,
                likes: 0
            };
            newState.posts.unshift(newAddedPost);
            newState.newPost.newPostTitle = '';
            newState.newPost.newPostText = '';
            return newState;
        }
        case ON_POST_CHANGE: {
            return { ...state, newPost: { newPostTitle: action.title, newPostText: action.text } };
        }
        case SET_USER_PROFILE:{
            return {...state, 
                id:action.data.id, name:action.data.name, 
                DOB:{...state.DOB, date:action.data.DOB.date, month:action.data.DOB.month, year:action.data.DOB.year}, 
                location:{...state.location, country:action.data.location.country, sity:action.data.location.sity}, 
                status:action.data.status, links:action.data.links, posts:[...action.data.posts], newPost:state.newPost,
                avatar:action.data.photos.avatar}
        }
        default: return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (title, text) => ({ type: ON_POST_CHANGE, title: title, text: text });
export const setUserProfileActionCreator = (data) => ({type:SET_USER_PROFILE, data: data});

export default profileReducer;