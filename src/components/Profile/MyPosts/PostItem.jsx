import React from "react";
import classes from './PostItem.module.css';

const PostItem = (props) =>{
    return(
        <div className={classes.Post}>
            <img src="https://img.lovepik.com/element/45006/1283.png_860.png" alt="Avatar" className={classes.Post__avatar} />
            <div className={classes.Post__content}>
                <span className={classes.Post__number}>{props.number}</span>
                <h3 className={classes.Post__header}>{props.title}</h3>
                <p className={classes.Post__texts}>{props.text}</p>
            </div>
            <button className={classes.Post__remove}>Delete</button>
            <span className={classes.Post__likes}><span className={classes.Post__likesNum}>{props.likes}</span>&#9825;</span>
        </div>
    );
};

export default PostItem;