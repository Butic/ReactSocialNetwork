import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { addNewPhotoThunk, getPhotosThunk, isFetchingActionCreator } from "../../redux/photosReducer"
import PreLoader from "../UI/PreLoader"
import AddNewPhotoInput from "./AddNewPhotoInput"
import PhotoEditor from "./PhotoEditor"
import Photos from "./Photos"
import classes from './PhotosContainer.module.css'

const PhotosContainer = (props) => {
    const currentID = props.match.params.userID?props.match.params.userID:localStorage.getItem('VReacte');

    const [addPhotoMode, setAddPhotoMode] = useState(false);

    const [photoLink, setPhotoLink] = useState('');

    const [idPhotoEdition, setIdPhotoEdition] = useState(1643891479936);

    useEffect(()=>{
        props.fetching();
        props.getPhotos(currentID);
    },[])

    const activateAddPhotoMode=()=>{
        setAddPhotoMode(true)
    }
    const deactivateAddPhotoMode=()=>{
        setAddPhotoMode(false)
    }
    const sendPhotoData=(e)=>{
        e.preventDefault();
        if(photoLink) props.addNewPhoto(photoLink, props.usersData);
        deactivateAddPhotoMode();
    }
    const onInputChange=(e)=>{
        setPhotoLink(e.target.value)
    }
    const openPhotoEditMode=id=>{
        setIdPhotoEdition(id)
    }
    return(
        <>
            {props.isFetching&&<PreLoader/>}
            <div className={classes.PhotosFrame}>
                {
                Number(props.usersData.id)===Number(localStorage.getItem('VReacte'))&&!addPhotoMode
                &&<button onClick={activateAddPhotoMode} className={classes.AddNewPhotoButton}/>
                ||
                Number(props.usersData.id)===Number(localStorage.getItem('VReacte'))&&addPhotoMode
                &&<AddNewPhotoInput onInputChange={onInputChange} sendPhotoData={sendPhotoData} deactivateAddPhotoMode={deactivateAddPhotoMode}/>
                }

                {props.photos&&props.photos.map(el=>{
                    return idPhotoEdition!=el.id
                    ?<Photos photo={el} openPhotoEditMode={openPhotoEditMode}/>
                    :<PhotoEditor el={el}/>
                })}
            </div>
        </>
        
    )
}

const mapStateToProps=state=>{
    return{
        photos: state.photosData.photos,
        isFetching: state.photosData.isFetching,
        usersData: state.photosData.usersData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        getPhotos(id){
            dispatch(getPhotosThunk(id))
        },
        fetching(){
            dispatch(isFetchingActionCreator())
        },
        addNewPhoto(photo, myData){
            dispatch(addNewPhotoThunk(photo, myData))
        }
    }
}
export default compose(withRouter, withAuthRedirect, connect(mapStateToProps, mapDispatchToProps)) (PhotosContainer)