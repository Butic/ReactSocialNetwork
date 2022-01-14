const ADD_MY_MESSAGE = 'dialog/ADD-MY-MESSAGE';

const lorem = 'dolor sit amet consectetur adipisicing elit. Minima accusantium maxime magni atque deserunt? Doloribus unde dolores, molestias, suscipit enim molestiae dignissimos dolorum quidem aliquid soluta incidunt officiis dolor nihil.';

const initialState = {
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
      ]
};

const dialogsReducer = (state=initialState, action) =>{
    switch (action.type){
        case ADD_MY_MESSAGE:{
            const newState = {...state};
            newState.messages=[...state.messages];
            newState.messages.unshift({id:1, me:true, message:action.message, date:Date.now()});
            return newState;
        }
        default: return state
    }
}

export const addMyMessageCreator=(message)=>({type:ADD_MY_MESSAGE, message});

export default dialogsReducer;