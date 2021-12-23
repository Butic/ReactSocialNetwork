import classes from './FriendItem.module.css';
import Avatar from '../../Profile/Avatar';

const FriendItem = (props) =>{
    return(
        props.friends.map(el=>{
            return (
                <li className={classes.FriendItem}><Avatar/> {el.name}</li>
            )
        })
    );
    // return(
    //     <li className={classes.FriendItem}><Avatar/> {props.name}</li>
    // );
}

export default FriendItem;