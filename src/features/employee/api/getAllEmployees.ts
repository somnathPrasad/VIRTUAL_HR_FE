import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

let SERVER: AxiosInstance;

export const getAllEmployees = async () => {
  try {
    const { data } = await SERVER.get("/employees", {
      headers: { "Content-Type": "application/json" },
    });
    console.log(data);
    return data;
  } catch (error: any) {
    console.log(error);
    throw Error(error);
  }
};

const useGetAllEmployees = (server: AxiosInstance) => {
  SERVER = server;
  return useQuery(["employees"], getAllEmployees);
};

export default useGetAllEmployees;
