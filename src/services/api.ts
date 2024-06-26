import axios from "axios";

const api = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/last",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
