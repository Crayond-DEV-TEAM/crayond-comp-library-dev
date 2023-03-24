import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import lightTheme from '../src/theme/lightTheme';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

export const decorators = [
  (Story) => {
    const muiTheme = useMemo(() =>
      createTheme({
        palette: {
          mode: 'light',
          ...lightTheme.palette,
        },
      })
    );

    return (
      <ThemeProvider theme={muiTheme}>
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
