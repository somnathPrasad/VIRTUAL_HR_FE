import { Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import PersistLogin from "../../layouts/PersistLogin";
import Admin from "../../pages/Admin";
import Employees from "../../pages/Employees";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import NewEmployee from "../../pages/NewEmployee";
import RequireAuth from "../auth/RequireAuth";
import Unauthorized from "../unauthorized/unauthorized";

const ROLES = {
    "USER": 2001,
    "ADMIN": 5150,
}

export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>

                {/* PUBLIC ROUTES */}
                <Route path="login" element={<Login />} />
                <Route path="unauthorized" element={<Unauthorized />} />


                {/* PROTECTED ROUTES */}
                <Route element={<PersistLogin />}>
                    <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                        <Route path="admin" element={<Admin />} />
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                        <Route path="employees" element={<Employees />} />
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                        <Route path="addNewEmployee" element={<NewEmployee />} />
                    </Route>
                </Route>



                {/* CATCH ALL */}
                <Route path="*" element={<>Page not found</>} />
            </Route>
        </Routes>
    )
}