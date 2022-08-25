import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../components/stylesComponents/PageContainer";

export default function Admin() {
    return (
        <PageContainer sx={{display:"flex", alignItems:"center"}}>
            <Grid
                container
                spacing={4}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <Link to="/employees">
                        <Button variant="contained" size="large">Employees</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Button variant="contained" size="large">Leaves</Button>
                </Grid>
                <Grid item>
                    <Link to="/addNewEmployee">
                        <Button variant="contained" size="large">New Employee</Button>
                    </Link>
                </Grid>
            </Grid>
        </PageContainer>
    )
}