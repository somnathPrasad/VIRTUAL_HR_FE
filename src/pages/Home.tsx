// import useRefreshToken from "../hooks/useRefreshToken"
import { Button, Grid } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
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
                    <Button variant="contained" size="large">My Profile</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" size="large">Department Panel</Button>
                </Grid>
                <Grid item>
                    <Link to={"/admin"}>
                        <Button variant="contained" size="large">Admin Panel</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Button onClick={signOut} variant="contained" size="large">Log out</Button>
                </Grid>
            </Grid>
        </PageContainer>
    )
}