import React from 'react';
import classes from './PhotoEditor.module.css'
const PhotoEditor=(props)=>{
    return(
        <div className={classes.PhotoEditor__container}>
            <buttton className={classes.PhotoEditor__avatar}>&#8593;</buttton>
            <button className={classes.PhotoEditor__delete} onClick={()=>{props.openPhotoEditMode(props.el.id)}}>&#10005;</button>
        </div>
    )
}

export default PhotoEditor;