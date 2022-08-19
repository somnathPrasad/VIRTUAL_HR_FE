import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api"
    : "https://virtual-hr-be.herokuapp.com/api";

const Axios = axios.create({
  baseURL: BASE_URL,
});

export const AxiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default Axios;
