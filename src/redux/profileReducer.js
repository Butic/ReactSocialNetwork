const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';

const lorem = 'dolor sit amet consectetur adipisicing elit. Minima accusantium maxime magni atque deserunt? Doloribus unde dolores, molestias, suscipit enim molestiae dignissimos dolorum quidem aliquid soluta incidunt officiis dolor nihil.';

const initalState = {
    posts: [
        {number: 1, title:'JS', text: lorem, likes:411},
        {number: 2, title:'React', text: lorem+lorem, likes:19142},
        {number: 3, title:'HTML', text: lorem+lorem+lorem, likes:51},
        {number: 4, title:'CSS', text: lorem, likes:1084},
        {number: 5, title:'NodeJS', text: lorem+lorem, likes:132},
      ],
    newPost: {newPostTitle: 'Andrey', newPostText: 'Web Developer'}
};

const profileReducer = (state=initalState, action) =>{
    if(action.type === ADD_POST){
        state.posts.push({
            number: state.posts.length+1, 
            title: state.newPost.newPostTitle, 
            text: state.newPost.newPostText, 
            likes: 0});
        state.newPost.newPostTitle='';
        state.newPost.newPostText='';
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