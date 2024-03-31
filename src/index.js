import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from "@mui/material"

import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette:{
    primary:{
      main: "#FFFFFF",
      contrastText: "purple",
    },
    secondary:{
      main:"#FFFFFF",
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

