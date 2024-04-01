import httpClient from "../services/http.service";
import { GET_MOVIE_DETAILS_API_URL } from './api-constants';

export const GET_MOVIE_CREDITS_API = async (movieId) => {
    try {
        const response = await httpClient.get(`${GET_MOVIE_DETAILS_API_URL}/${movieId}/credits?language=en-US`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}