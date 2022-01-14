import axios from "axios";

const ON_LOGIN = 'ON_LOGIN';
const ON_LOGOUT = 'ON_LOGOUT';
const LOGIN_ERROR = 'LOGIN_ERROR';

const initialState = {
    isAuth: Number(localStorage.getItem('VReacte'))?true:false,
    loggedID: localStorage.getItem('VReacte')?localStorage.getItem('VReacte'):"",
    isLoginError: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_LOGIN:{
            return {...state, isAuth:true, isLoginError:false}
        }
        case ON_LOGOUT:{
            return {...state, isAuth:false}
        }
        case LOGIN_ERROR:{
            return {...state, isLoginError:true}
        }
    }
    return state
}

export default loginReducer;

const onLoginActionCreator = () => ({type:ON_LOGIN});
export const onLogOutActionCreator= () => ({type:ON_LOGOUT});
const loginErrorActionCreator = () => ({type:LOGIN_ERROR});

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
                            dispatch(loginErrorActionCreator());
                        }
                    }
                    else{
                        dispatch(loginErrorActionCreator());
                    }
                })
    }
}