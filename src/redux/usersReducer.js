const FOLLOW = 'FOLLOW';
const initialState = {
    users:[
        {id:1, followed:false, name:'Andrew', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:2, followed:true, name:'Alena', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:3, followed:true, name:'Dimas', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:4, followed:false, name:'Artem', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:5, followed:true, name:'Elena', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:6, followed:false, name:'Alexey', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:7, followed:false, name:'Yurok', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:8, followed:true, name:'Andrew', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:9, followed:false, name:'Alena', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:10, followed:true, name:'Dimas', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:11, followed:true, name:'Artem', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:12, followed:false, name:'Elena', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:13, followed:false, name:'Alexey', status:'some status here', location:{country:'Country', sity:'Sity'}},
        {id:14, followed:false, name:'Yurok', status:'some status here', location:{country:'Country', sity:'Sity'}}
    ]
};

const usersReducer = (state=initialState, action) =>{
    if(action.type===FOLLOW){

        let newState={...state, users: state.users.map(el=>{
            if(el.id==action.id){
                const newEl = {...el, followed:!el.followed};
                return newEl;
            }else{
                return el;
            }
        })};
        return newState;
    }
    return state;
}

export const followActionCreator=(id)=>{
    return {type:FOLLOW, id:id};
}

export default usersReducer;