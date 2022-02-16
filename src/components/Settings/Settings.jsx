import React, { useState } from 'react';
import AlertMessage from './AlertMessage';
import classes from './Settings.module.css'

const Settings = (props) =>{

    const changeMonthToString=(value)=>{
        switch(Number(value)){
            case 1: return "January"   
            case 2: return "February"
            case 3: return "March"
            case 4: return "April"
            case 5: return "May"
            case 6: return "June"
            case 7: return "July"
            case 8: return "August"
            case 9: return "September"
            case 10: return "October"
            case 11: return "November"
            case 12: return "December"
            default: return ""
        }
    }
    const changeMonthToFigure=(value)=>{
        switch(value){
            case "January": return 1
            case "February": return 2
            case "March": return 3
            case "April": return 4
            case "May": return 5
            case "June": return 6
            case "July": return 7
            case "August": return 8
            case "September": return 9
            case  "October": return 10
            case  "November": return 11
            case  "December": return 12
            default: return ""
        }
    }
    
    const [email, setEmail] = useState(props.userData.email)
    const [previousPassword, setPreviousPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState(props.userData.name)
    const [date, setDate] = useState(props.userData.DOB.date)
    const [month, setMonth] = useState(changeMonthToFigure(props.userData.DOB.month))
    const [year, setYear] = useState(props.userData.DOB.year)
    const [country, setCountry] = useState(props.userData.location.country)
    const [sity, setSity] = useState(props.userData.location.sity)
    const [facebook, setFacebook] = useState(props.userData.links.vk)
    const [instagram, setInstagram] = useState(props.userData.links.instagram)
    const [alertMessage, setAlertMessage] = useState('');

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
    const changeDate = (e) =>{
        setDate(e.target.value)
    }
    const changeMonth = (e) =>{
        setMonth(e.target.value)
    }
    const changeYear = (e) =>{
        setYear(e.target.value)
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
        if(previousPassword){
            if(previousPassword==props.userData.password){
                if(newPassword||confirmPassword){
                    if(newPassword!=confirmPassword) {
                        setAlertMessage("'New Password' and 'Confirm Password' fields should be equal.");
                        return false;
                    }
                }
            }
            else {
                setAlertMessage("'Previous Password' field is incorrect. Enter coorect one to update it. Or leave it empty to keep the previous one.");
                return false;
            }
        }
        else if(!previousPassword&&newPassword){
            setAlertMessage("Please write previous password to save a new one.");
            return false;
        }
        return true;
    }

    const saveData = () =>{
        if(checkPassword()){
                const newData = {
                    email: email,
                    password: newPassword?newPassword:props.userData.password,
                    name: props.userData.name,
                    DOB: {
                        date: date,
                        month: changeMonthToString(month),
                        year: year
                    },
                    location:{
                        country: country,
                        sity: sity
                    },
                    links:{
                        vk: facebook,
                        instagram: instagram
                    }
                }
                props.updateData(newData)
        }
    }

    return(
        <>
            {alertMessage&&<AlertMessage alertText={alertMessage} setAlertMessage={setAlertMessage}/>}
            <form className={classes.Settings__container} onSubmit={(e)=>{e.preventDefault()}}>
                <span className={classes.Settings__span}>E-mail: </span><input disabled type="email" required className={classes.Settings__input} value={email} onChange={changeEmail} placeholder="Add your Email (login) here"/>
                <span className={classes.Settings__span}>Previous password: </span><input type="password" className={classes.Settings__input} placeholder="For changing password" value={previousPassword} onChange={changePreviousPassword}/>
                <span className={classes.Settings__span}>New password: </span><input type="password" disabled={!previousPassword?true:false} className={classes.Settings__input} placeholder="Add new password" onChange={changeNewPassword}/>
                <span className={classes.Settings__span}>Confirm password: </span><input type="password" disabled={newPassword?false:true} className={newPassword==confirmPassword?classes.Settings__input:classes.Settings__input+' '+classes.Settings__incorrect_input} placeholder="Write new password again" onChange={changeConfirmPassword}/>
                <span className={classes.Settings__span}>Name: </span><input type="text" className={classes.Settings__input} value={name} onChange={changeName}/>
                <div className={classes.Settings_dob}>
                <span className={classes.Settings__span}>Date: </span><input type='number'  min='1' max='31' className={classes.Settings__input} value={date} onChange={changeDate} placeholder="Add date 1-31"/>
                <span className={classes.Settings__span}>Month: </span><input type='number'  min='1' max='12' className={classes.Settings__input} value={month} onChange={changeMonth} placeholder="Add month 1-12"/>
                <span className={classes.Settings__span}>Year: </span><input type='number' className={classes.Settings__input} value={year} onChange={changeYear} placeholder="Add year"/>
                </div>
                <div className={classes.Settings__location}>
                    <span className={classes.Settings__span}>Country: </span><input type="text" className={classes.Settings__input} value={country} onChange={changeCountry}/>
                    <span className={classes.Settings__span}>Sity: </span><input type="text" className={classes.Settings__input} value={sity} onChange={changeSity}/>
                </div>
                <div className={classes.Settings__links}>
                    <span className={classes.Settings__span}>Facebook: </span><input type="text" className={classes.Settings__input} value={facebook} onChange={changeFacebook}/>
                    <span className={classes.Settings__span}>Instagram: </span><input type="text" className={classes.Settings__input} value={instagram} onChange={changeInstagram}/>
                </div>
                <button className={classes.Settings__button} onClick={saveData}>Save</button> 
            </form>
        </>
    )
}

export default Settings;