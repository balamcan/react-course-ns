import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:4000/api/',
    // headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin':"*"
    //   },
});


export function postAtendee(newAtendee){
    return client.post("atendee",newAtendee
    // ,{
    //     headers: {
    //         Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin':"*"
    //     }
    // }
    );
}