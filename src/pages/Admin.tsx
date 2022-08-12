import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../components/stylesComponents/PageContainer";
import { TabButton } from "../features/home";

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
                        <TabButton variant="contained" size="large">Employees</TabButton>
                    </Link>
                </Grid>
                <Grid item>
                    <TabButton variant="contained" size="large">Leaves</TabButton>
                </Grid>
                <Grid item>
                    <Link to="/addNewEmployee">
                        <TabButton variant="contained" size="large">New Employee</TabButton>
                    </Link>
                </Grid>
            </Grid>
        </PageContainer>
    )
}