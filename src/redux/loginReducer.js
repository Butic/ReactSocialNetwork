import React from 'react';
const CHANGE_VALUE = 'CHANGE_VALUE';

const initialState = {
    email: "123",
    password: "331"
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUE: {
            return{ ...state, email:action.value.email, password:action.value.password }
        }
    }
    return state
}

export default loginReducer;

export const changeValueActionCreator = (value) => ({ type: CHANGE_VALUE, value: value })