import {createStore, combineReducers} from 'redux';

import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profileData: profileReducer,
    dialogData: dialogsReducer,
    friendData: friendsReducer
});

let store = createStore(reducers);

export default store;
