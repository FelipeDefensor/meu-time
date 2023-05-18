import axios from "axios"

const API_URL = "https://api-football-v1.p.rapidapi.com/v3/"

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY
    },
  });



export default axiosInstance