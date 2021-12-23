import React from "react";
import StoreContext from "../../../redux/StoreContext";
import PostInputContainer from "./PostInputContainer";
import PostItemContainer from "./PostItemContainer";
import classes from './PostsContainer.module.css';

const Posts = () =>{
    return(
        <StoreContext.Consumer>
            { store=>{
                return (
                    <div className={classes.PostsContainer}>
                        <PostInputContainer />
                        <PostItemContainer />
                    </div>
                );
                }
            }
        </StoreContext.Consumer>
    );
};

export default Posts;