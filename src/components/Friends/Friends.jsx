import classes from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) =>{
    return(
        <div>
            <input type="search" name="" id="" placeholder="Search your friends here..." className={classes.Friend__search}/>
            <ul className={classes.Friend__list}>
                {props.friendData.friends.map(el=><FriendItem name={el.name}/>)}
            </ul>
        </div>
    );
};
export default Friends;