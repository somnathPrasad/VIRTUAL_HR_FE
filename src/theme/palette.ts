import colors from "./colors";

const customPalette = {
  primary: colors.primary,
  divider: "#E7EBF0",
  common: colors.common,
  text: {
    primary: "#1A2027",
    secondary: "#3E5060",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  grey: {
    "50": "#F3F6F9",
    "100": "#E7EBF0",
    "200": "#E0E3E7",
    "300": "#CDD2D7",
    "400": "#B2BAC2",
    "500": "#A0AAB4",
    "600": "#6F7E8C",
    "700": "#3E5060",
    "800": "#2D3843",
    "900": "#1A2027",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  error: colors.error,
  success: colors.success,
  warning: colors.warning,
  secondary: colors.secondary,
  info: colors.info,
  contrastThreshold: 3,
  tonalOffset: 0.2,
  background: {
    paper: "#fff",
    default: "#fff",
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export default customPalette;
