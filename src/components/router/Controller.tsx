import { Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

export default function Controller() {
    return (
        // <MainLayout>
            <Outlet/>
        // </MainLayout>
    )
}