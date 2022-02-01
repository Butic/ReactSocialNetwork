import { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { getPhotosThunk, isFetchingActionCreator } from "../../redux/photosReducer"
import PreLoader from "../UI/PreLoader"
import Photos from "./Photos"
import classes from './PhotosContainer.module.css'

const PhotosContainer = (props) => {
    console.log(props)
    const currentID = props.match.params.userID?props.match.params.userID:localStorage.getItem('VReacte');
    useEffect(()=>{
        props.fetching();
        props.getPhotos(currentID);
    },[])
    return(
        <>
            {props.isFetching&&<PreLoader/>}
            <div className={classes.PhotosFrame}>
                <button className={classes.AddNewPhoto}/>
                {props.photos&&props.photos.map(el=>{
                    return <Photos photo={el}/>
                })}
            </div>
        </>
        
    )
}

const mapStateToProps=state=>{
    return{
        photos: state.photosData.photos,
        isFetching: state.photosData.isFetching
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        getPhotos(id){
            dispatch(getPhotosThunk(id))
        },
        fetching(){
            dispatch(isFetchingActionCreator())
        }
    }
}
export default compose(withRouter, withAuthRedirect, connect(mapStateToProps, mapDispatchToProps)) (PhotosContainer)