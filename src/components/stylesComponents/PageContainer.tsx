import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const PageContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(15),
}))

export default PageContainer;