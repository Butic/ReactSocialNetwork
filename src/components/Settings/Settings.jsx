import React, { useState } from 'react';
import AlertMessage from './AlertMessage';
import classes from './Settings.module.css'

const Settings = (props) =>{
    
    const [email, setEmail] = useState(props.userData.email)
    const [previousPassword, setPreviousPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState(props.userData.name)
    const [dob, setDob] = useState('')
    const [country, setCountry] = useState(props.userData.location.country)
    const [sity, setSity] = useState(props.userData.location.sity)
    const [facebook, setFacebook] = useState(props.userData.links.vk)
    const [instagram, setInstagram] = useState(props.userData.links.instagram)
    const [alertMessage, setAlertMessage] = useState('');
    const [possibleToSave, setPossibleToSave] = useState(true);

    const changeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const changePreviousPassword = (e)=>{
        setPreviousPassword(e.target.value)
    }
    const changeNewPassword = (e)=>{
        setNewPassword(e.target.value)
    }
    const changeConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value)
    }
    const changeName = (e) =>{
        setName(e.target.value)
    }
    const changeDob = (e) =>{
        setDob(e.target.value)
    }
    const changeCountry = (e) =>{
        setCountry(e.target.value)
    }
    const changeSity = (e) =>{
        setSity(e.target.value)
    }
    const changeFacebook = (e) =>{
        setFacebook(e.target.value)
    }
    const changeInstagram = (e) =>{
        setInstagram(e.target.value)
    }
    
    const checkPassword = () =>{
        setPossibleToSave(true);
        if(previousPassword){
            if(previousPassword==props.userData.password){
                if(newPassword||confirmPassword){
                    if(newPassword!=confirmPassword) {
                        setAlertMessage("'New Password' and 'Confirm Password' fields should be equal.");
                        setPossibleToSave(false);
                    }
                }
            }
            else {
                setAlertMessage("'Previous Password' field is incorrect.");
                setPossibleToSave(false);
            }
        }
        if(!previousPassword&&newPassword){
            setAlertMessage("Please write previous password to save a new one.");
            setPossibleToSave(false);
        }
    }

    const saveData = () =>{
        const newData = {
            email: email,
            password: newPassword?newPassword:props.userData.password,
            name: props.userData.name
        }
    }

    return(
        <>
            {alertMessage&&<AlertMessage alertText={alertMessage} setAlertMessage={setAlertMessage}/>}
            <form className={classes.Settings__container} onSubmit={(e)=>{e.preventDefault()}}>
                <span className={classes.Settings__span}>E-mail: </span><input type="email" required className={classes.Settings__input} value={email} onChange={changeEmail} placeholder="Add your Email (login) here"/>
                {props.isLoggedIn
                &&<>
                    <span className={classes.Settings__span}>Previous password: </span><input type="password" className={classes.Settings__input} placeholder="For changing password" value={previousPassword} onChange={changePreviousPassword}/>
                </>}
                <span className={classes.Settings__span}>New password: </span><input type="password" disabled={props.isLoggedIn&&!previousPassword?true:false} className={classes.Settings__input} placeholder="Add new password" onChange={changeNewPassword}/>
                <span className={classes.Settings__span}>Confirm password: </span><input type="password" disabled={newPassword?false:true} className={newPassword==confirmPassword?classes.Settings__input:classes.Settings__input+' '+classes.Settings__incorrect_input} placeholder="Write new password again" onChange={changeConfirmPassword}/>
                <span className={classes.Settings__span}>Name: </span><input type="text" className={classes.Settings__input} value={name} onChange={changeName}/>
                <span className={classes.Settings__span}>Date of Birth: </span><input type="date" className={classes.Settings__input} value={dob} onChange={changeDob}/>
                <div className={classes.Settings__location}>
                    <span className={classes.Settings__span}>Country: </span><input type="text" className={classes.Settings__input} value={country} onChange={changeCountry}/>
                    <span className={classes.Settings__span}>Sity: </span><input type="text" className={classes.Settings__input} value={sity} onChange={changeSity}/>
                </div>
                <div className={classes.Settings__links}>
                    <span className={classes.Settings__span}>Facebook: </span><input type="text" className={classes.Settings__input} value={facebook} onChange={changeFacebook}/>
                    <span className={classes.Settings__span}>Instagram: </span><input type="text" className={classes.Settings__input} value={instagram} onChange={changeInstagram}/>
                </div>
                {props.isLoggedIn?<button className={classes.Settings__button} onClick={checkPassword}>Save</button>:<button className={classes.Settings__button}>Register</button>}
                
            </form>
        </>
        
    )
}

export default Settings;