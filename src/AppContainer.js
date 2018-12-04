import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import ViewRouter from './components/utils/ViewRouter';
import Footer from './components/utils/Footer';
import NavBar from './components/utils/NavBar';


const styles = () => ({
    appContainer: {
        position: 'relative'
    }
});

const AppContainer = props => (
    <div className={props.classes.appContainer}>
        <NavBar />
        <ViewRouter />
        <Footer />
    </div>
);

AppContainer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AppContainer);
