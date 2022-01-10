import { connect } from "react-redux"
import { Redirect } from 'react-router-dom';

const mapStateToProps=(state)=>{
    return{
        isAuth: state.loginData.isAuth,
        loggedID: state.loginData.loggedID
    }
}

const withAuthRedirect=(Component)=>{
    const connectedAuthRedirect=(props)=>{
        if(!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...props} />
    }
    return connect(mapStateToProps)(connectedAuthRedirect);
}

export default withAuthRedirect;