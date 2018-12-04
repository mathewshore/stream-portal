import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import grey from '@material-ui/core/colors/grey';
import palette from './palette';
import overrides from './overrides';


const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette,
    overrides,
    border: {
        main: `1px solid ${grey[400]}`,
        radius: 2
    }
});

export default theme;
