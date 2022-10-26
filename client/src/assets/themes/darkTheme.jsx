import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#170f23",
      paper: "hsla(0,0%,100%,0.05)",
      alphaBg: "hsla(0,0%,100%,0.1)",
    },
  },
});

export default darkTheme;
