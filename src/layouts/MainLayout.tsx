import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { NotificationProvider } from "../context/NotificationProvider";
import theme from "../theme/theme";

export default function MainLayout() {

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