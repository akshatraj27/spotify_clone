// src/ThemeProvider.js
import React, { useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.palette.mode === 'light' ? darkTheme : lightTheme));
  };

  return (
    <MuiThemeProvider theme={theme}>
      {children}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
