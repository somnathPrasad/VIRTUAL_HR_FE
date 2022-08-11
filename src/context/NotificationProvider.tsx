import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

type SnackbarType = "error" | "warning" | "info" | "success";

interface NotificationInterface {
    setSnackType: React.Dispatch<React.SetStateAction<SnackbarType>>
    setSnackMessage: React.Dispatch<React.SetStateAction<string>>
}

const NotificationContext = createContext<NotificationInterface>({ setSnackMessage: () => { }, setSnackType: () => { } })

export function NotificationProvider({ children }: { children: React.ReactNode }) {

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setSnackMessage("")
    };

    const [message, setSnackMessage] = useState<string>("")
    const [type, setSnackType] = useState<SnackbarType>("success")


    return (
        <NotificationContext.Provider value={{ setSnackMessage, setSnackType }}>
            <Snackbar anchorOrigin={{ horizontal: "center", vertical: "bottom" }} open={message !== ""} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            {children}
        </NotificationContext.Provider>
    )

}

export default NotificationContext;