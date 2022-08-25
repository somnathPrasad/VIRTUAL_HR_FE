import { alpha } from "@mui/material/styles";
import colors from "./colors";

const filledInput = {
    defaultProps:{
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        border: "1px solid #e2e2e1",
        overflow: "hidden",
        borderRadius: "10px",
        backgroundColor:"#fcfcfb",
        transition: "border-color, background-color, box-shadow",
        "&:hover": {
          backgroundColor: "#fcfcfb",
        },
        "&.Mui-focused": {
          backgroundColor: "#fcfcfb",
          boxShadow: `${alpha(colors.primary.main, 0.25)} 0 0 0 4px`,
          borderColor: colors.primary.main,
        },
      },
    },
  }

export default filledInput;