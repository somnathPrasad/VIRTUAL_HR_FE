import { useMutation } from "@tanstack/react-query";
import Axios from "../../../lib/axios";

export const loginUser = async ({
  userId,
  password,
}: {
  userId: string;
  password: string;
}) => {
  try {
    const { data } = await Axios.post(
      "/auth",
      { userId, password },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    console.log(data)
    return data;
  } catch (error: any) {
    throw Error(error.message);
  }
};

const useLoginUser = () => useMutation(["login"], loginUser);

export default useLoginUser;
