import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


export default function RequireAuth({ allowedRoles }: { allowedRoles: Number[] }) {

    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.roles.find(role => allowedRoles.includes(role)) ? <Outlet /> :
            auth?.userId ? <Navigate to="/unauthorized" state={{ from: location }} replace /> :
                <Navigate to="/login" state={{ from: location }} replace />
    )
}

/*

if( all the roles in auth.roles array is in allowedRoles array)
{
    navigate to where they were going
}else{
    
    if( auth.usedId is not null ){
        go to not authorized page
    }else{
        go to login page
    }
}

*/