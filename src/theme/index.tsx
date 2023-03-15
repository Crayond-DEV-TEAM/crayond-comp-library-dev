import {
  createTheme, 
  ThemeProvider,
} from "@mui/material/styles";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
  
let LightTheme = createTheme(lightTheme);
let DarkTheme = createTheme(darkTheme); 

export default function Theme({ children, mode }:any) {
  return <ThemeProvider theme={mode === "light" ? LightTheme : DarkTheme}>{children}</ThemeProvider>;
}
