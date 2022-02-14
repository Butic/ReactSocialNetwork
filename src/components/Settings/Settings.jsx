import React, { useState } from 'react';
import classes from './Settings.module.css'

const Settings = (props) =>{
    
    const [email, setEmail] = useState(props.userData.email)
    const [password, setPassword] = useState(props.userData.password)
    const [name, setName] = useState(props.userData.name)
    const [country, setCountry] = useState(props.userData.location.country)
    const [sity, setSity] = useState(props.userData.location.sity)
    const [facebook, setFacebook] = useState(props.userData.links.vk)
    const [instagram, setInstagram] = useState(props.userData.links.instagram)


    return(
        <form className={classes.Settings__container} onSubmit={(e)=>{e.preventDefault()}}>
            <span className={classes.Settings__span}>E-mail: </span><input type="email" required className={classes.Settings__input} value={email} placeholder="Add your Email (login) here"/>
            {props.isLoggedIn
            ?<>
                <span className={classes.Settings__span}>Previous password: </span><input type="password" className={classes.Settings__input} placeholder="For changing password" value={password}/>
                <span className={classes.Settings__span}>New password: </span><input type="password" className={classes.Settings__input} placeholder="Add new password"/>
            </>
            :<>
                <span className={classes.Settings__span}>Password: </span><input type="password" className={classes.Settings__input} placeholder="Add password"/>    
            </>}
            <span className={classes.Settings__span}>Confirm password: </span><input type="password" disabled={password?false:true} className={classes.Settings__input} placeholder="Write new password again"/>
            <span className={classes.Settings__span}>Name: </span><input type="text" className={classes.Settings__input} value={name}/>
            <span className={classes.Settings__span}>Date of Birth: </span><input type="date" className={classes.Settings__input}/>
            <div className={classes.Settings__location}>
                <span className={classes.Settings__span}>Country: </span><input type="text" className={classes.Settings__input} value={country}/>
                <span className={classes.Settings__span}>Sity: </span><input type="text" className={classes.Settings__input} value={sity}/>
            </div>
            <div className={classes.Settings__links}>
                <span className={classes.Settings__span}>Facebook: </span><input type="text" className={classes.Settings__input} value={facebook}/>
                <span className={classes.Settings__span}>Instagram: </span><input type="text" className={classes.Settings__input} value={instagram}/>
            </div>
            {props.isLoggedIn?<button className={classes.Settings__button}>Save</button>:<button className={classes.Settings__button}>Register</button>}
            
        </form>
    )
}

export default Settings;