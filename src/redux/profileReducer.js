const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';

const profileReducer = (state, action) =>{
    if(action.type === ADD_POST){
        state.posts.push({
            number: state.posts.length+1, 
            title: state.newPost.newPostTitle, 
            text: state.newPost.newPostText, 
            likes: 0})
    }
    else if(action.type === ON_POST_CHANGE){
        state.newPost.newPostTitle=action.title;
        state.newPost.newPostText=action.text;
    }
    return state;
}

export const addPostActionCreator=()=>({type: ADD_POST});
export const onPostChangeActionCreator=(title,text)=>({type:ON_POST_CHANGE, title:title, text:text});

export default profileReducer;