import httpClient from "../services/http.service";
import { GET_ALL_MOVIES_API_URL } from "./api-constants";

export const GET_ALL_MOVIES_API = async (pageNumber) => {
    try {

        const response = await httpClient.get(`${GET_ALL_MOVIES_API_URL}?page=${pageNumber}`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}