import createPalette from '@material-ui/core/styles/createPalette';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';


const palette = createPalette({
    primary: {
        light: grey[200],
        main: grey[600],
        dark: grey[800],
        contrastText: '#fff'
    },
    secondary: {
        light: green[200],
        main: green[400],
        dark: green[600]
    },
    tertiary: {
        light: 'white',
        main: 'white',
        dark: 'white'
    },
    text: {
        main: grey[800],
        contrastText: '#fff'
    },
    background: {
        light: grey[200],
        main: grey[600],
        dark: grey[800],
    }
});

export default palette;
