import classes from './SubscribesItem.module.css';
import Avatar from '../../Avatar/Avatar';

const SubscribesItem = (props) =>{
    return(
        props.friends.map(el=>{
            return (
                <li className={classes.FriendItem}><Avatar/> {el.name}</li>
            )
        })
    );
}

export default SubscribesItem;