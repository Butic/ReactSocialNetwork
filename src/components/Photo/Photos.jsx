import classes from './Photos.module.css'

const Photo = (props) =>{
    return <img className={classes.Photo} src={props.photo.src} alt="Photo" />
}

export default Photo;