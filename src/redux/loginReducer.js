import axios from "axios";

const CHANGE_VALUE = 'CHANGE_VALUE';
const ON_LOGIN = 'ON_LOGIN';
const ON_LOGOUT = 'ON_LOGOUT';

const initialState = {
    email: "",
    password: "",
    isAuth: Number(localStorage.getItem('VReacte'))?true:false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUE: {
            return{ ...state, email:action.value.email, password:action.value.password }
        }
        case ON_LOGIN:{
            return {...state, isAuth:true}
        }
        case ON_LOGOUT:{
            return {...state, isAuth:false}
        }
    }
    return state
}

export default loginReducer;

export const changeValueActionCreator = (value) => ({ type: CHANGE_VALUE, value: value })
const onLoginActionCreator = () => ({type:ON_LOGIN})
export const onLogOutActionCreator= () => ({type:ON_LOGOUT})

export const onLoginThunk=(email, password)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:8000/users/?email=${email}`)
                .then((responce) => {
                    if (responce.data.length!=0) {
                        if(password==responce.data[0].password){
                            localStorage.setItem('VReacte', responce.data[0].id);
                            dispatch(onLoginActionCreator());
                        }
                        else{
                            alert('Password is incorrect')
                        }
                    }
                    else{
                        alert('Current e-mail not exists')
                    }
                })
    }
}