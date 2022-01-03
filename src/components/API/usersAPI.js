import axios from "axios";

const baseURL = 'http://localhost:8000/users/';

export const addMyData = (current_id) =>{
    return axios.get(baseURL+current_id)
}

export const usersList = (currentPage) =>{
    return axios.get(baseURL+"?_page="+currentPage)
}