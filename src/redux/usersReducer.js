const FOLLOW = 'FOLLOW';
const USERS = 'USERS';
const GO_TO_PAGE = 'GO_TO_PAGE';
const TOTAL_PAGES = 'TOTAL_PAGES';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const ADD_MY_DATA ='ADD_MY_DATA';
const DISABLE_BUTTON = 'DISABLE_BUTTON';

const initialState = {
    users:[],
    totalPages:0,
    currentPage:1,
    current_id:localStorage.getItem('VReacte'),
    myData:{},
    isFollowing:[]
};

const usersReducer = (state=initialState, action) =>{
    
    switch(action.type){
        case FOLLOW:{
            return {...state, myData:{...action.updatedUser} }
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
        case TOGGLE_FETCHING:{
            return{...state, isFetching:action.isFetching}
        }
        case ADD_MY_DATA:{
            return{...state, myData:{...action.data}}
        }
        case DISABLE_BUTTON:{
            return {...state, isFollowing:[...action.isFollowingArray]}
        }
        default: 
            return state;
    }
}

export const followActionCreator=(updatedUser)=>{
    return {type:FOLLOW, updatedUser:updatedUser};
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

export const toggleFetchingActionCreator = (isFetching) =>{
    return {type:TOGGLE_FETCHING, isFetching:isFetching};
}

export const addMyDataActionCreator = (data) =>{
    return {type:ADD_MY_DATA, data:data};
}

export const disableButtonActionCreator = (isFollowingArray) =>{
    return {type:DISABLE_BUTTON, isFollowingArray:isFollowingArray}
}
export default usersReducer;