import icon from "../icon.svg"
// import lssLogo from "../logo.jpg"
import logoPng from "../logo.png"
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

export default function Navbar() {

    return (
        <AppBar position="fixed" sx={{py:1, px:1}}>
            <Grid container>
                <Grid item>
                    <img src={logoPng} alt="logo" width={70} />
                </Grid>
                <Grid
                    item
                    sx={{ display: "flex", alignItems: "center", ml:2 }}
                >
                    <Typography variant="h6">VIRTUAL HR</Typography>
                </Grid>
            </Grid>
        </AppBar>
    )
}