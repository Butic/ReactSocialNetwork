import axios from "axios";

const FOLLOW = 'FOLLOW';
const USERS = 'USERS';
const GO_TO_PAGE = 'GO_TO_PAGE';
const NUMBER_OF_USERS = 'NUMBER_OF_USERS';
const TOTAL_PAGES = 'TOTAL_PAGES';

const initialState = {
    users:[],
    totalPages:0,
    currentPage:1
};

const usersReducer = (state=initialState, action) =>{
    
    switch(action.type){
        case FOLLOW:{
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
        case USERS:{
            return {...state, users:[...action.users]}
        }
        case GO_TO_PAGE:{
            return {...state, currentPage:action.pageNum}
        }
        case TOTAL_PAGES:{
            return{...state, totalPages:action.totalPages}
        }
        default: 
            return state;
    }
}

export const followActionCreator=(id)=>{
    return {type:FOLLOW, id:id};
}

export const userListActionCreator=(users)=>{
    return {type:USERS, users:users};
}

export const goToPageActionCreator=(pageNum)=>{
    return {type:GO_TO_PAGE, pageNum:pageNum};
}

export const totalPagesCounterActionCreator=(totalPages)=>{
    return {type:TOTAL_PAGES, totalPages:totalPages};
}
export default usersReducer;