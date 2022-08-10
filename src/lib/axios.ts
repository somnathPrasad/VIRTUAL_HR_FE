import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

export const AxiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default Axios;
