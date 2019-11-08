import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

// function callback(error, response){

// }

export function getEvents(){
    return client.get("event");
}
export function getEvent(id){
    return client.get(`event/${id}`);
}
