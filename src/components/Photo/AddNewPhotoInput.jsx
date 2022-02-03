import classes from './AddNewPhotoInput.module.css'

const AddNewPhotoInput=(props)=>{
    return (
        <form className={classes.AddNewPhoto__Form} onSubmit={props.sendPhotoData}>
            <span>Add Photo Link:</span>
            <input className={classes.AddNewPhoto__Input} onChange={props.onInputChange}/>
            <div className={classes.AddNewPhoto__Buttons}>
                <button className={classes.AddNewPhoto__Add}>Add</button>
                <button className={classes.AddNewPhoto__Cancel} onClick={props.deactivateAddPhotoMode}>Cancel</button>
            </div>
        </form>
    )
}
export default AddNewPhotoInput;