import React from 'react';
import classes from './Photos.module.css'

const Photo = (props) =>{

    return <img className={classes.Photo} src={props.photo.src} alt="Photo" onClick={()=>{props.openPhotoEditMode(props.photo.id)}}/>
}

export default Photo;