import Axios from "../lib/axios";
import useAuth from "./useAuth";

export default function useLogout() {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({ roles: [], companyId: "" });
    try {
      await Axios("/logout", { withCredentials: true });
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
}
