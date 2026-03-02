import axios from "axios"

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
})