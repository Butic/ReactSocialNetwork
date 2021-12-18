import { renderDom } from "../render";

const lorem = 'dolor sit amet consectetur adipisicing elit. Minima accusantium maxime magni atque deserunt? Doloribus unde dolores, molestias, suscipit enim molestiae dignissimos dolorum quidem aliquid soluta incidunt officiis dolor nihil.';

const State = {
    
    profileData:{
        posts: [
            {number: 1, title:'JS', text: lorem, likes:411},
            {number: 2, title:'React', text: lorem+lorem, likes:19142},
            {number: 3, title:'HTML', text: lorem+lorem+lorem, likes:51},
            {number: 4, title:'CSS', text: lorem, likes:1084},
            {number: 5, title:'NodeJS', text: lorem+lorem, likes:132},
          ],
          newPost: {newPostTitle: 'Andrey', newPostText: 'Web Developer'}
    },
    dialogData:{
        messages: [
            {id:1, me:true, message:lorem},
            {id:1, me:false, message:lorem+lorem},
            {id:1, me:true, message:lorem+lorem},
            {id:1, me:true, message:lorem+lorem+lorem},
            {id:1, me:false, message:lorem+lorem},
            {id:1, me:false, message:lorem+lorem},
            {id:1, me:true, message:lorem+lorem},
            {id:1, me:false, message:lorem+lorem+lorem},
            {id:1, me:true, message:lorem+lorem},
            {id:1, me:false, message:lorem+lorem}
          ],
        chartMembers: [
            {id:1, name:'Andrew'},
            {id:2, name:'Alena'},
            {id:3, name:'Dimas'},
            {id:4, name:'Artem'},
            {id:5, name:'Elena'},
            {id:6, name:'Alexey'},
            {id:7, name:'Yurok'}
          ]
    },
    friendData:{
        friends:[
            {id:1, name:'Andrew'},
            {id:2, name:'Alena'},
            {id:3, name:'Dimas'},
            {id:4, name:'Artem'},
            {id:5, name:'Elena'},
            {id:6, name:'Alexey'},
            {id:7, name:'Yurok'},
            {id:1, name:'Andrew'},
            {id:2, name:'Alena'},
            {id:3, name:'Dimas'},
            {id:4, name:'Artem'},
            {id:5, name:'Elena'},
            {id:6, name:'Alexey'},
            {id:7, name:'Yurok'}
        ]
    }
};

export const addPost = () =>{
    State.profileData.posts.push({
        number: State.profileData.posts.length+1, 
        title: State.profileData.newPost.newPostTitle, 
        text: State.profileData.newPost.newPostText, 
        likes: 0});
    onPostChange('','');
}

export const onPostChange=(title, text)=>{
    State.profileData.newPost.newPostTitle=title;
    State.profileData.newPost.newPostText=text;
    renderDom(State);
}

export default State;