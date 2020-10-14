import Axios from 'axios';

export const apiCurrency = Axios.create({
    baseURL: 'https://api.exchangeratesapi.io/latest',
});

export const apiLocal = Axios.create({
    baseURL: 'http://localhost:3333',
});
