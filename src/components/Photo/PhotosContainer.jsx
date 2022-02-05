import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { addNewPhotoThunk, changeAvatarThunk, deletePhotoThunk, getPhotosThunk, isFetchingActionCreator } from "../../redux/photosReducer"
import PreLoader from "../UI/PreLoader"
import AddNewPhotoInput from "./AddNewPhotoInput"
import PhotoEditor from "./PhotoEditor"
import Photos from "./Photos"
import classes from './PhotosContainer.module.css'

const PhotosContainer = (props) => {

    const myID = localStorage.getItem('VReacte');
    const currentID = props.match.params.userID?props.match.params.userID:myID;

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

    const closePhotoEditMode=()=>{
        setIdPhotoEdition('')
    }
    const deletePhoto=id=>{
        props.deletePhoto(id, props.usersData)
    }
    const changeAvatar=src=>{
        props.changeAvatar(src, props.usersData)
        closePhotoEditMode()
    }

    return(
        <>
            {props.isFetching&&<PreLoader/>}
            <div className={classes.PhotosFrame}>
                {
                Number(props.usersData.id)===Number(myID)&&!addPhotoMode
                &&<button onClick={activateAddPhotoMode} className={classes.AddNewPhotoButton}/>
                ||
                Number(props.usersData.id)===Number(myID)&&addPhotoMode
                &&<AddNewPhotoInput onInputChange={onInputChange} sendPhotoData={sendPhotoData} deactivateAddPhotoMode={deactivateAddPhotoMode}/>
                }

                {props.photos&&props.photos.map(el=>{
                    return idPhotoEdition==el.id&&props.usersData.id==myID
                    ?<PhotoEditor el={el} closePhotoEditMode={closePhotoEditMode} deletePhoto={deletePhoto} changeAvatar={changeAvatar}/>
                    :<Photos photo={el} openPhotoEditMode={openPhotoEditMode}/>
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
        },
        deletePhoto(id, myData){
            dispatch(deletePhotoThunk(id, myData))
        },
        changeAvatar(src, myData){
            dispatch(changeAvatarThunk(src, myData))
        }
    }
}
export default compose(withRouter, withAuthRedirect, connect(mapStateToProps, mapDispatchToProps)) (PhotosContainer)