import colors from "./colors";

const buttonTheme = {
  styleOverrides: {
    root:{
      backgroundColor: "transparent",
      boxShadow: "0px",
      color: colors.common.black
    },
    text:{
      color: colors.primary.main
    },
    textInherit: {
      color: colors.primary.main
    },
    textPrimary:{
      color: colors.primary.main
    },
    textSecondary:{
      color: colors.secondary.main
    },
    textSuccess:{
      color: colors.success.main
    },
    textError:{
      color: colors.error.main
    },
    textInfo: {
      color: colors.info.main
    },
    textWarning:{
      color: colors.warning.main,
    },
    outlined:{
      borderRadius: "10px",
      color: colors.primary.main,
    },
    outlinedSecondary:{
      color: colors.secondary.main
    },
    outlinedSuccess:{
      color: colors.success.main,
    },
    outlinedError:{
      color: colors.error.main,
    },
    outlinedInfo: {
      color: colors.info.main
    },
    outlinedWarning: {
      color: colors.warning.main,
    },
    contained: {
      backgroundColor: colors.primary.main,
      color: colors.common.white,
      boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.40)",
      "&:hover": {
        backgroundColor: colors.primary[600],
        boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.50)",
      }
    },
    containedPrimary: {
      backgroundColor: colors.primary.main,
    },
    containedSecondary:{
      backgroundColor: colors.secondary.main,
      "&:hover": {
        backgroundColor: colors.secondary.main,
      }
    },
    containedSuccess: {
      backgroundColor: colors.success.main,
      "&:hover": {
        backgroundColor: colors.success[600],
      }
    },
    containedInfo: {
      backgroundColor: colors.info.main,
      "&:hover": {
        backgroundColor: colors.info.dark,
      }
    },
    containedError: {
      backgroundColor: colors.error.main,
      "&:hover": {
        backgroundColor: colors.error[600],
      }
    },
    containedWarning: {
      backgroundColor: colors.warning.main,
      "&:hover": {
        backgroundColor: colors.warning[600],
      }
    },
    textSizeLarge:{
      fontSize: "1.3rem",
      lineHeight: 1.3125,
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
    outlinedSizeLarge:{
      padding: "1rem 3rem",
      fontSize: "1.3rem",
      lineHeight: 1.3125,
      letterSpacing: 0,
      fontWeight: 700,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
    sizeLarge: {
      padding: "1rem 3rem",
      fontSize: "1.3rem",
      lineHeight: 1.3125,
      letterSpacing: 0,
      fontFamily:
        '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 700,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
      boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.40)",
      "&:hover": {
        backgroundColor: colors.primary[600],
        boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.50)",
      },
    },
    sizeMedium: {
      padding: "0.7rem 2rem",
      fontSize: "1.2rem",
      lineHeight: 1.3125,
      letterSpacing: 0,
    },
    sizeSmall: {
      padding: "0.6rem 1rem",
      fontSize: "1rem",
      lineHeight: 1,
      letterSpacing: 0,
    },
  },
};

export default buttonTheme;
