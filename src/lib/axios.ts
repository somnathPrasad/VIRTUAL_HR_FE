import axios from "axios";

const Axios = axios.create({
  baseURL: "https://virtual-hr-be.herokuapp.com/api",
});

export const AxiosPrivate = axios.create({
  baseURL: "https://virtual-hr-be.herokuapp.com/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default Axios;
