import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout"
import icon from "../icon.svg"
import lssLogo from "../logo.jpg"

export default function Navbar() {
    const logout = useLogout();
    const navigate = useNavigate();
    const signOut = async () => {
        await logout();
        navigate("/")
    }
    return (
        <div className="bg-blue-100 w-full h-24 fixed top-0 left-0 right-0 shadow-lg rounded-b-lg">
            <div className="relative">
                <div className="absolute">
                    <img src={icon} alt="icon" width={200} className="" />
                    <p className="fixed left-40 top-16 font-medium text-xl">Virtual HR</p>
                </div>
                <div className="absolute top-1/2 right-7">
                    <img src={lssLogo} alt="icon" width={80} className="rounded-full pt-3" />

                </div>
            </div>
            <button className="absolute top-1/2 right-52" onClick={signOut}>Log out</button>
        </div>
    )
}