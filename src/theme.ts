import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#52002d",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-outlined": {
            backgroundColor: "#e4e7ed7a",
            color: "black",
          },
        },
      },
    },
  }
});

export default theme;
