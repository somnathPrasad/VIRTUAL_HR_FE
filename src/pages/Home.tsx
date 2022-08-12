// import useRefreshToken from "../hooks/useRefreshToken"
import { Grid } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { TabButton } from "../features/home";
import PageContainer from "../components/stylesComponents/PageContainer";

export default function Home() {
    // const refresh = useRefreshToken();
    // return (<button onClick={refresh}>Refresh</button>)
    const logout = useLogout();
    const navigate = useNavigate();
    const signOut = async () => {
        await logout();
        navigate("/")
    }
    return (
        <PageContainer sx={{display:"flex", alignItems:"center"}}>
            <Grid
                container
                spacing={4}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <TabButton variant="contained" size="large">My Profile</TabButton>
                </Grid>
                <Grid item>
                    <TabButton variant="contained" size="large">Department Panel</TabButton>
                </Grid>
                <Grid item>
                    <Link to={"/admin"}>
                        <TabButton variant="contained" size="large">Admin Panel</TabButton>
                    </Link>
                </Grid>
                <Grid item>
                    <TabButton onClick={signOut} variant="contained" size="large">Log out</TabButton>
                </Grid>
            </Grid>
        </PageContainer>
    )
}