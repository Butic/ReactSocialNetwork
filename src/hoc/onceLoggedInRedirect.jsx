import { connect } from "react-redux"
import { Redirect } from 'react-router-dom';

const mapStateToProps=(state)=>{
    return{
        isAuth: state.loginData.isAuth,
        loggedID: state.loginData.loggedID
    }
}

const onceLoggedInRedirect=(Component)=>{

    const connectedAuthRedirect=(props)=>{
        return props.isAuth ? <Redirect to={"/profile"}/> : <Component {...props} />
    }

    return connect(mapStateToProps)(connectedAuthRedirect);
}

export default onceLoggedInRedirect;