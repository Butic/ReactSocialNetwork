import classes from './Friends.module.css';
import StoreContext from '../../redux/StoreContext';
import FriendItemContainer from './FriendItem/FriendItemContainer';

const Friends = () =>{
    return(
        <div>
            <input type="search" name="" id="" placeholder="Search your friends here..." className={classes.Friend__search}/>
            <ul className={classes.Friend__list}>
                <FriendItemContainer/>
            </ul>
        </div>
    );
};
export default Friends;