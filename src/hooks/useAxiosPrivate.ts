import { useEffect } from "react";
import { AxiosPrivate } from "../lib/axios";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";


export default function useAxiosPrivate() {

  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {

    // When we are making a request
    const requestInterceptor = AxiosPrivate.interceptors.request.use(
      (config: any) => {
        if (!config.headers["Authorization"]) {
          // authorization header is not present that means the request is made for the first time. so we set the header with the accessToken that we received during login.
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      }, (error) => Promise.reject(error)
    );

    // When we receive a response
    const responseInterceptor = AxiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return AxiosPrivate(prevRequest);
        }
        return Promise.reject(error)
      }
    );
    return () => {
      AxiosPrivate.interceptors.request.eject(requestInterceptor);
      AxiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, refresh]);
  return AxiosPrivate;
}
