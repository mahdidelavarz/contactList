import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3003';

const http = {
    get: axios.get,
    put: axios.put,
    delete: axios.delete,
    post: axios.post
}
export default http;


export function getAllContacts() {
    return http.get('/contacts');
}

export function deleteContact(id){
 return http.delete(`/contacts/${id}`);
}

export function postContacts(data) {
    http.post('/contacts', data);
}
