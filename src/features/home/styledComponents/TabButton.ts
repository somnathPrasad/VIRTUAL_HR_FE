import { Button, styled } from "@mui/material";

export const TabButton = styled(Button)({
    backgroundColor: "#029ca3",
    padding: "1rem 3rem",
    fontSize:"1.3rem",
    boxShadow:"0 25px 50px -12px rgb(0 0 0 / 0.40)",
    "&:hover": {
        backgroundColor:"#017f85",
        boxShadow:"0 25px 50px -12px rgb(0 0 0 / 0.50)",
    }
})