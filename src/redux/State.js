let run;
const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const lorem = 'dolor sit amet consectetur adipisicing elit. Minima accusantium maxime magni atque deserunt? Doloribus unde dolores, molestias, suscipit enim molestiae dignissimos dolorum quidem aliquid soluta incidunt officiis dolor nihil.';

const store = {
    _state: {
        profileData:{
            posts: [
                {number: 1, title:'JS', text: lorem, likes:411},
                {number: 2, title:'React', text: lorem+lorem, likes:19142},
                {number: 3, title:'HTML', text: lorem+lorem+lorem, likes:51},
                {number: 4, title:'CSS', text: lorem, likes:1084},
                {number: 5, title:'NodeJS', text: lorem+lorem, likes:132},
              ],
            newPost: {newPostTitle: 'Andrey', newPostText: 'Web Developer'},
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
        },
    },
    renderDom(renderD){
        run=renderD;
        renderD();
    },
    getState(){
        return this._state
    },
    dispatch(action){
        if(action.type === ADD_POST){
            this._state.profileData.posts.push({
                number: this._state.profileData.posts.length+1, 
                title: this._state.profileData.newPost.newPostTitle, 
                text: this._state.profileData.newPost.newPostText, 
                likes: 0})
            this.dispatch({type:'ON-POST-CHANGE', title:'', text:''});
        }
        else if(action.type===ON_POST_CHANGE){
            this._state.profileData.newPost.newPostTitle=action.title;
            this._state.profileData.newPost.newPostText=action.text;
            run();
        }
    }
} 

export const addPostActionCreator=()=>({type: ADD_POST});
export const onPostChangeActionCreator=(title,text)=>({type:ON_POST_CHANGE, title:title, text:text});

export default store;