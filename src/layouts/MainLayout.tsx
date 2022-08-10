import React from "react";
import Navbar from "./Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="bg-[#e8f1ff] min-h-screen flex items-center justify-center">
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Navbar />
            {/* {children} */}
            <Outlet/>
        </div>
    )
}