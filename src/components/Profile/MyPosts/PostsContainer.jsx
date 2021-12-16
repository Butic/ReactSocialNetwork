import React from "react";
import PostInput from "./PostInput";
import PostItem from "./PostItem";
import classes from './PostsContainer.module.css';
const PostsContainer = () =>{
    const lorem = 'dolor sit amet consectetur adipisicing elit. Minima accusantium maxime magni atque deserunt? Doloribus unde dolores, molestias, suscipit enim molestiae dignissimos dolorum quidem aliquid soluta incidunt officiis dolor nihil.';
    const postData = [
        {number:'1', title:'JS', text: lorem, likes:411},
        {number:'2', title:'React', text: lorem+lorem, likes:19142},
        {number:'3', title:'HTML', text: lorem+lorem+lorem, likes:51},
        {number:'4', title:'CSS', text: lorem, likes:1084},
        {number:'5', title:'NodeJS', text: lorem+lorem, likes:132},
    ];

    let postItemArray = postData.map(el=><PostItem number={el.number} title={el.title} text={el.text} likes={el.likes}/>)

    return(
        <div className={classes.PostsContainer}>
            <PostInput/>

            {postItemArray}
        </div>
    );
};

export default PostsContainer;