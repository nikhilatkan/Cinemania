import httpClient from "../services/http.service";
import { GET_ALL_MOVIES_API_URL } from "./api-constants";

export const GET_ALL_MOVIES_API = async () => {
    try {
        const response = await httpClient.get(GET_ALL_MOVIES_API_URL);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}