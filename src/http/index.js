import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

const config = {
    baseURL,
};

const api = axios.create(config);

export default api;