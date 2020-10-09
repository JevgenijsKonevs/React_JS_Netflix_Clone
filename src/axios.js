import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themovie.db.org/3",
});

export default instance;