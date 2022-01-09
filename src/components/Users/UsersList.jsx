import store from '../../redux/reduxStore';
import UsersItemContainer from './UsersItemContainer';
import classes from './UsersList.module.css';


const UsersList = () =>{
    return(
        <>
            <input type="search" name="" id="" placeholder="Find people here..." className={classes.Users__search}/>
            <ul className={classes.Users__list}>
                <UsersItemContainer/>
            </ul>
        </>
    );
};
export default UsersList;