import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NotificationProvider } from "../context/NotificationProvider";

export default function MainLayout() {

    const theme = createTheme({
        palette: {
            primary: {
                light: "#c8faf2",
                main: "#029ca3",
                dark: "#01211c"
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <NotificationProvider>
                <div className="bg-gradient-to-br from-[#f0fcfa] to-[#c8faf2] min-h-screen flex justify-center">
                    <Navbar />
                    <Outlet />
                </div>
            </NotificationProvider>
        </ThemeProvider>
    )
}