import classes from './Followers.module.css';
import FollowersItemContainer from './FollowersItem/FollowersItemContainer';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const Followers = () =>{
    return(
        <div>
            <input type="search" name="" id="" placeholder="Search your followers here..." className={classes.Friend__search}/>
            <ul className={classes.Friend__list}>
                <FollowersItemContainer/>
            </ul>
        </div>
    );
};

export default withAuthRedirect(Followers);