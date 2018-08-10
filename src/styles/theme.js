import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#37474F',
    },
    secondary: {
      light: '#E0E0E0',
      main: '#afafaf',
      contrastText: '#F5F5F5',
    },
    text: {
      primary: '#000000',
      secondary: '#afafaf',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

export default theme;
