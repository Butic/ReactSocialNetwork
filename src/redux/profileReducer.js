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
    switch (action.type){
        case ADD_POST:{
            const newState={...state};
            newState.posts=[...state.posts];
            newState.newPost={...state.newPost};
            const newPost={
                number: newState.posts.length+1, 
                title: newState.newPost.newPostTitle, 
                text: newState.newPost.newPostText, 
                likes: 0
            };
            newState.posts.push(newPost);
            newState.newPost.newPostTitle='';
            newState.newPost.newPostText='';
        return newState;
        }
        case ON_POST_CHANGE:{
            const newState={...state};
            newState.newPost={...state.newPost};
            newState.newPost.newPostTitle=action.title;
            newState.newPost.newPostText=action.text;
        return newState;
        }
        default: return state;
    }
    
}

export const addPostActionCreator=()=>({type: ADD_POST});
export const onPostChangeActionCreator=(title,text)=>({type:ON_POST_CHANGE, title:title, text:text});

export default profileReducer;