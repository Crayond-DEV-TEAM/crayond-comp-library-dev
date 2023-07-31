import {
  createTheme, 
  ThemeProvider,
} from "@mui/material/styles";
import lightTheme from "./lightTheme";
import { useMemo } from "react";

export default function Theme({ children, mode }:any) {
  const muiTheme = useMemo(() =>
  createTheme({
    palette: {
      mode: 'light',
      ...lightTheme.palette,
    },
  })
,[mode]);

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}
