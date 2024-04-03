import httpClient from "../services/http.service";
import { GET_SEARCHED_MOVIES_API_URL } from "./api-constants";

const GET_SEARCHED_MOVIES_API = async (searchedValue) => {
    try {
        const res = await httpClient.get(`${GET_SEARCHED_MOVIES_API_URL}?query=${searchedValue}`);
        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default GET_SEARCHED_MOVIES_API;