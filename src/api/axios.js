import axios from "axios";

const API_BASE = "https://fakestoreapi.com"; // replace with your API

export const api = axios.create({
    baseURL: API_BASE,
    headers: { "Content-Type": "application/json" },
});

// example interceptor for auth token if using redux user state
api.interceptors.request.use((config) => {
    // if you store token in localStorage or redux, attach here
    const token = localStorage.getItem("token");
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
});
