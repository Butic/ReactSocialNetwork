import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";

let run;
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
                {id:1, me:true, message:lorem, date:116735615},
                {id:1, me:false, message:lorem+lorem, date:117581851},
                {id:1, me:true, message:lorem+lorem, date:135177123},
                {id:1, me:true, message:lorem+lorem+lorem, date:1156813123},
                {id:1, me:false, message:lorem+lorem, date:1525561253},
                {id:1, me:false, message:lorem+lorem, date:53743517651},
                {id:1, me:true, message:lorem+lorem, date:86535128521},
                {id:1, me:false, message:lorem+lorem+lorem, date:1113123151},
                {id:1, me:true, message:lorem+lorem, date:1127275162},
                {id:1, me:false, message:lorem+lorem, date:1341216651}
              ],
            chartMembers: [
                {id:1, name:'Andrew'},
                {id:2, name:'Alena'},
                {id:3, name:'Dimas'},
                {id:4, name:'Artem'},
                {id:5, name:'Elena'},
                {id:6, name:'Alexey'},
                {id:7, name:'Yurok'}
              ],
              newMessage:'Hello',
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
    subscribe(renderDom){
        run=renderDom;
        renderDom();
    },
    getState(){
        return this._state
    },
    dispatch(action){
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogData = dialogsReducer(this._state.dialogData, action);
        this._state.friendData = friendsReducer(this._state.friendData, action);
        run();
    }
} 

export default store;