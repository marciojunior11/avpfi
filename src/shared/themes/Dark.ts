import { createTheme } from '@mui/material';
import { blue, green } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: blue[800],
            dark: blue[900],
            light: blue[700],
            contrastText: '#ffffff',
        },
        secondary: {
            main: green[600],
            dark: green[900],
            light: green[300],
            contrastText: '#ffffff',
        },
        background: {
            default: '#202124',
            paper: '#303134',
        }
    }
});