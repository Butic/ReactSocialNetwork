import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../validators/validators";
import classes from './PostInput.module.css';

const PostInput = (props) => {
    const onAddPost = (value) => {
        const newPost = { title: value.title, text: value.text }
        props.addPost(newPost);
        value.title = "";
        value.text = "";
    }

    return <PostInputReduxForm onSubmit={onAddPost} />
};

const PostInputForm = (props) => {
    return (
        <form className={classes.Input} onSubmit={props.handleSubmit}>
            <Field component="input" name="title" type="text" className={classes.Input__area} placeholder="Add Title" />
            <Field component="input" name="text" type="text"  className={classes.Input__area } placeholder="Add Text" validate={[required]} />
            {props.submitFailed && !props.valid && <span className={classes.error__text} >Text field is required</span>}
            <button className={classes.Add__post}>Add Post</button>
        </form>
    )
}

const PostInputReduxForm = reduxForm({ form: 'input_post' })(PostInputForm)

export default PostInput;