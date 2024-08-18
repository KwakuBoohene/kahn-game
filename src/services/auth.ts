import axios, { AxiosError } from "axios";
import { handleError } from "../helpers/utils";

const API_URL: string = import.meta.env.VITE_API_URL || "http://localhost:3000";
export const loginRequest = async (email: string, password: string) => {
  return axios
    .post(`${API_URL}/api/login`, {
        username: email,
        password
    })
    .then((response) => {
        return response.data;
    })
    .catch((error: AxiosError) => {
       throw error;
    });
};
