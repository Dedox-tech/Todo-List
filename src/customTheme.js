import {createTheme} from '@mui/material/styles';
import {red} from "@mui/material/colors";

const personalTheme = createTheme ({
    palette: {
        primary: red,
        secondary: {
          main: '#e91e63',
        },
      },
});

export {personalTheme};