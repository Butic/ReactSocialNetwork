import classes from './FriendItem.module.css';
import Avatar from '../../Profile/Avatar';

const FriendItem = (props) =>{
    return(
        <li className={classes.FriendItem}><Avatar/> {props.name}</li>
    );
}

export default FriendItem;