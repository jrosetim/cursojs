import axios from 'axios';


const api = axios.create({
    //baseURL: 'http://github.com'
    baseURL: 'https://api.github.com/repos/'
});

export default api;