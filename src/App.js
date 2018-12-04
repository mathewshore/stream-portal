import React from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppContainer from './AppContainer';
import theme from './theme';


const App = () => (
    <MuiThemeProvider theme={theme}>
        <AppContainer />
    </MuiThemeProvider>
);

export default App;
