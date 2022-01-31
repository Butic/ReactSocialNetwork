import classes from './Subscribes.module.css';
import SubscribesItemContainer from './SubscribesItem/SubscribesItemContainer';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const Subscribes = () =>{
    return(
        <div>
            <input type="search" name="" id="" placeholder="Search your subscribes here..." className={classes.Friend__search}/>
            <ul className={classes.Friend__list}>
                <SubscribesItemContainer/>
            </ul>
        </div>
    );
};

export default withAuthRedirect(Subscribes);