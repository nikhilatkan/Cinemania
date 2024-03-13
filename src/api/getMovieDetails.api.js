import httpClient from "../services/http.service";
import { GET_MOVIE_DETAILS_API_URL } from "./api-constants";

export const GET_MOVIE_DETAILS_API = async (params) => {
    try {
        const response = await httpClient.get(`${GET_MOVIE_DETAILS_API_URL}/${params}`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}