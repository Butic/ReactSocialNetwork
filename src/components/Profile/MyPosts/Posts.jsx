import React from "react";
import StoreContext from "../../../redux/StoreContext";
import PostInputContainer from "./PostInputContainer";
import PostItem from "./PostItem";
import classes from './PostsContainer.module.css';
const Posts = () =>{
    return(
        <StoreContext.Consumer>
            { store=>{
                return (
                    <div className={classes.PostsContainer}>
                        <PostInputContainer newPost={store.getState().profileData.newPost} dispatch={store.dispatch} />

                        {store.getState().profileData.posts.map(el=><PostItem number={el.number} title={el.title} text={el.text} likes={el.likes}/>)}
                        <div className={classes.last}></div>
                    </div>
                );
                }
            }
        </StoreContext.Consumer>
    );
};

export default Posts;