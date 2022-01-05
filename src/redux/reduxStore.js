import {createStore, combineReducers, applyMiddleware} from 'redux';
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import loginReducer from './loginReducer';
import profileReducer from "./profileReducer";
import usersReducer from './usersReducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    loginData: loginReducer,
    profileData: profileReducer,
    dialogData: dialogsReducer,
    friendData: friendsReducer,
    usersData: usersReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
