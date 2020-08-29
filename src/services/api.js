import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://api.exchangeratesapi.io/latest',
});

export default api;
