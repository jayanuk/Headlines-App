import axios from 'axios';

export const get = (url) => {
    return axios.get(url);
} 

export const post = (url, data) => {
    return axios.post(url, data);
}