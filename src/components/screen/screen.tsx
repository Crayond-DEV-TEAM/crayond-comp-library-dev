import Box from '@mui/material/Box';
import { styles } from './styles'; 
import { ScreenProps } from './props';

export default function Screen(props: ScreenProps) {
  const {
    containerStyle,
    headerStyle,
    bodyStyle,
    footerStyle,
    headerComponent,
    bodyComponent,
    footerComponent,
  } = props;

  return (
    <Box sx={{ ...styles.container, ...containerStyle }}>
      <Box sx={headerStyle}> {headerComponent} </Box>
      <Box sx={{ ...styles.body, ...bodyStyle }}>{bodyComponent}</Box>
      <Box sx={ footerStyle }>{footerComponent}</Box>
    </Box>
  );
}

Screen.defaultProps = {
  containerStyle: {},
  headerStyle: {},
  bodyStyle: {},
  footerStyle: {},
  headerComponent: <></>,
  bodyComponent: <></>,
  footerComponent: <></>,
};
