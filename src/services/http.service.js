import axios from "axios";
const instance = axios.create();

instance.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
    }
    return config;
})

export default instance;