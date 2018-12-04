import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import ViewWrapper from '../ViewWrapper';


const styles = theme => ({
});

const AboutView = (props) => {
    const { classes } = props;

    return (
        <ViewWrapper header="About">
            <div>
                This website combines different streaming sites into one portal-like experience.
            </div>
        </ViewWrapper>
    );
};

export default withStyles(styles, { withTheme: true })(AboutView);
