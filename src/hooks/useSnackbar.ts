import { useContext } from "react";
import NotificationContext from "../context/NotificationProvider";

export default function useSnackbar() {
  return useContext(NotificationContext);
}
