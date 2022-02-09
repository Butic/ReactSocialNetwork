import axios from "axios";

const usersURL = 'http://localhost:8000/users/';
const dialogsURL = 'http://localhost:8000/dialogs/';

export const usersAPI = {
    addMyData(current_id){
        return axios.get(usersURL+current_id)
    },

    usersList(currentPage){
        return axios.get(usersURL+"?_page="+currentPage)
    },
    
    getPage(pageNum){
        return axios.get(usersURL+`?_page=${pageNum}`)
    },
    
    deleteUser(current_id){
        return axios.delete(usersURL + current_id)
    },
    
    addUser(newData){
        return axios.post(usersURL, newData)
    },
    
    updateUser(current_id, newData){
        return this.deleteUser(current_id).then(()=>this.addUser(newData))
    }
}

export const loginAPI = {
    checkEmail(email){
        return axios.get(usersURL+`?email=${email}`)
    }
}

export const dialogsAPI = {
    getAllDialogs(){
        return axios.get(dialogsURL)
    },
    addDailog(newData){
        return axios.post(dialogsURL, newData)
    },
    deleteDailog(current_id){
        return axios.delete(dialogsURL + current_id)
    },
    updateDialog(current_id, newData){
        return this.deleteDailog(current_id).then(()=>this.addDailog(newData))
    }
}
