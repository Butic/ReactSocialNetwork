import classes from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';
import StoreContext from '../../redux/StoreContext';

const Friends = () =>{
    return(
        <StoreContext.Consumer>
            {store=>{
                return(
                    <div>
                        <input type="search" name="" id="" placeholder="Search your friends here..." className={classes.Friend__search}/>
                        <ul className={classes.Friend__list}>
                            {store.getState().friendData.friends.map(el=><FriendItem name={el.name}/>)}
                        </ul>
                    </div>
                );
            }  
            }
        </StoreContext.Consumer>
    );
};
export default Friends;