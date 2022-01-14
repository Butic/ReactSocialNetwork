import { usersAPI } from '../API/api';

const FOLLOW = 'users/FOLLOW';
const USERS = 'users/USERS';
const GO_TO_PAGE = 'users/GO_TO_PAGE';
const TOTAL_PAGES = 'users/TOTAL_PAGES';
const TOGGLE_FETCHING = 'users/TOGGLE_FETCHING';
const ADD_MY_DATA = 'users/ADD_MY_DATA';
const DISABLE_BUTTON = 'users/DISABLE_BUTTON';

const initialState = {
    users: [],
    totalPages: 0,
    currentPage: 1,
    current_id: null,
    myData: {},
    isFollowing: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return { ...state, myData: { ...action.updatedUser } }
        }
        case USERS: {
            return { ...state, users: [...action.users] }
        }
        case GO_TO_PAGE: {
            return { ...state, currentPage: action.pageNum }
        }
        case TOTAL_PAGES: {
            return { ...state, totalPages: action.totalPages }
        }
        case TOGGLE_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case ADD_MY_DATA: {
            return { ...state, myData: { ...action.data }, current_id: action.data.id }
        }
        case DISABLE_BUTTON: {
            return { ...state, isFollowing: [...action.isFollowingArray] }
        }
        default:
            return state;
    }
}

export const followActionCreator = updatedUser => ({ type: FOLLOW, updatedUser });
export const userListActionCreator = users => ({ type: USERS, users });
export const goToPageActionCreator = pageNum => ({ type: GO_TO_PAGE, pageNum });
export const totalPagesCounterActionCreator = totalPages => ({ type: TOTAL_PAGES, totalPages });
export const toggleFetchingActionCreator = isFetching => ({ type: TOGGLE_FETCHING, isFetching });
export const addMyDataActionCreator = data => ({ type: ADD_MY_DATA, data });
export const disableButtonActionCreator = isFollowingArray => ({ type: DISABLE_BUTTON, isFollowingArray });

export const getUsersThunk = (current_id, currentPage) => {
    return async (dispatch) => {
        dispatch(toggleFetchingActionCreator(true));
        const responce1 = await usersAPI.addMyData(current_id);
        dispatch(addMyDataActionCreator(responce1.data));
        const responce2 = await usersAPI.usersList(currentPage);
        dispatch(toggleFetchingActionCreator(false));
        dispatch(totalPagesCounterActionCreator(Math.ceil(responce2.headers["x-total-count"] / 10)));
        dispatch(userListActionCreator(responce2.data));
    }
}

export const goToPageThunk = (pageNum) => {
    return async (dispatch) => {
        dispatch(toggleFetchingActionCreator(true));
        goToPageActionCreator(pageNum);
        const responce = await usersAPI.getPage(pageNum);
        dispatch(userListActionCreator(responce.data));
        dispatch(toggleFetchingActionCreator(false));
        dispatch(goToPageActionCreator(pageNum));

    }
}

export const disableButtonThunk = (isFollowing, target_id) => {
    return (dispatch) => {
        if (isFollowing.includes(Number(target_id))) {
            dispatch(disableButtonActionCreator([...isFollowing.filter(el => el != Number(target_id))]));
        }
        else {
            dispatch(disableButtonActionCreator([...isFollowing, Number(target_id)]));
        }
    }
}

export const followUserThunk = (myData, target_id, isFollowing) => {
    return async (dispatch) => {
        if (!myData.subscribes.includes(Number(target_id))) {
            const newData = { ...myData, subscribes: [...myData.subscribes, Number(target_id)] };
            const responce = await usersAPI.updateUser(myData.id, newData);
            dispatch(followActionCreator(responce.data));
            dispatch(disableButtonActionCreator([...isFollowing.filter(el => el != Number(target_id))]));
        }
        else {
            const newData = { ...myData, subscribes: [...myData.subscribes.filter(el => el != Number(target_id))] };
            const responce = await usersAPI.updateUser(myData.id, newData);
            dispatch(followActionCreator(responce.data));
            dispatch(disableButtonActionCreator([...isFollowing.filter(el => el != Number(target_id))]));
        }
    }
}

export default usersReducer;