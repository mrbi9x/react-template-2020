import { createMuiTheme } from "@material-ui/core";
const defaultTheme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#f9f9f9",
    },
  },
  overrides: {
    MuiPaper: {
      elevation24: "0 4px 24px rgba(0,0,0,.08)",
      elevation1: {
        boxShadow: "0 4px 24px rgba(0,0,0,.08)",
      },
      rounded: {
        borderRadius: 8,
      },
    },
  },
});

export default defaultTheme;
