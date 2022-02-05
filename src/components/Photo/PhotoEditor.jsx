import React from 'react';
import classes from './PhotoEditor.module.css';

const PhotoEditor=(props)=>{
    return(
        <div className={classes.PhotoEditor__container}>
            <buttton className={classes.PhotoEditor__avatar} onClick={()=>{props.changeAvatar(props.el.src)}}>&#8679;</buttton>
            <button className={classes.PhotoEditor__close} onClick={props.closePhotoEditMode}>&#10005;</button>
            <button className={classes.PhotoEditor__delete} onClick={()=>{props.deletePhoto(props.el.id)}}>&#128465;</button>
        </div>
    )
}

export default PhotoEditor;