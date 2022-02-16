import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../redux/headerReducer';
import AlertMessage from '../Settings/AlertMessage';
import classes from './Registration.module.css'

const Registration = (props) =>{

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
    
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [country, setCountry] = useState('')
    const [sity, setSity] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [alertMessage, setAlertMessage] = useState('');

    const changeEmail = (e) =>{
        setEmail(e.target.value)
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
    const checkEmail=()=>{
        if(email.includes('.')&&email.includes('@')) return true
        else return false
    }
    const checkPassword = () =>{
                if(newPassword||confirmPassword){
                    if(newPassword!=confirmPassword) {
                        setAlertMessage("'New Password' and 'Confirm Password' fields should be equal.");
                        return false;
                    }
                }
        return true;
    }
    const saveData = () =>{
        if(checkEmail() && checkPassword()){
                const newData = {
                    email: email,
                    password: newPassword,
                    name: name,
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
                props.addNewUserData(newData)
        }
    }

    return(
        <>
            {alertMessage&&<AlertMessage alertText={alertMessage} setAlertMessage={setAlertMessage}/>}
            <form className={classes.Registration__container} onSubmit={(e)=>{e.preventDefault()}}>
                <span className={classes.Registration__span}>E-mail: *</span><input type="email" required className={classes.Registration__input} value={email} onChange={changeEmail} placeholder="Add your Email (login) here"/>
                <span className={classes.Registration__span}>New password: *</span><input type="password" required className={classes.Registration__input} placeholder="Add new password" onChange={changeNewPassword}/>
                <span className={classes.Registration__span}>Confirm password: *</span><input type="password" required disabled={newPassword?false:true} className={newPassword==confirmPassword?classes.Registration__input:classes.Registration__input+' '+classes.Registration__incorrect_input} placeholder="Write new password again" onChange={changeConfirmPassword}/>
                <span className={classes.Registration__span}>Name: *</span><input type="text" required className={classes.Registration__input} value={name} onChange={changeName}/>
                <div className={classes.Registration_dob}>
                <span className={classes.Registration__span}>Date: </span><input type='number'  min='1' max='31' className={classes.Registration__input} value={date} onChange={changeDate} placeholder="Add date 1-31"/>
                <span className={classes.Registration__span}>Month: </span><input type='number'  min='1' max='12' className={classes.Registration__input} value={month} onChange={changeMonth} placeholder="Add month 1-12"/>
                <span className={classes.Registration__span}>Year: </span><input type='number' className={classes.Registration__input} value={year} onChange={changeYear} placeholder="Add year"/>
                </div>
                <div className={classes.Registration__location}>
                    <span className={classes.Registration__span}>Country: </span><input type="text" className={classes.Registration__input} value={country} onChange={changeCountry}/>
                    <span className={classes.Registration__span}>Sity: </span><input type="text" className={classes.Registration__input} value={sity} onChange={changeSity}/>
                </div>
                <div className={classes.Registration__links}>
                    <span className={classes.Registration__span}>Facebook: </span><input type="text" className={classes.Registration__input} value={facebook} onChange={changeFacebook}/>
                    <span className={classes.Registration__span}>Instagram: </span><input type="text" className={classes.Registration__input} value={instagram} onChange={changeInstagram}/>
                </div>
                <button className={classes.Registration__button} onClick={saveData}>Register</button> 
            </form>
        </>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        addNewUserData(data){
            dispatch(createNewUser(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(Registration);