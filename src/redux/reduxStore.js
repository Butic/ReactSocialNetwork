import {createStore, combineReducers, applyMiddleware} from 'redux';
import dialogsReducer from "./dialogsReducer";
import subscribesReducer from "./subscribesReducer";
import loginReducer from './loginReducer';
import profileReducer from "./profileReducer";
import usersReducer from './usersReducer';
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import followersReducer from './followersReducer';
import { photosReducer } from './photosReducer';

let reducers = combineReducers({
    loginData: loginReducer,
    profileData: profileReducer,
    dialogData: dialogsReducer,
    subscribesData: subscribesReducer,
    usersData: usersReducer,
    followersData: followersReducer,
    photosData: photosReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
