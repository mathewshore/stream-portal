import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import { viewRoutes } from '../../../urls';
import history from '../../../history';


const styles = theme => ({
    navBarContainer: {
        display: 'flex',
        height: theme.spacing.unit * 6,
        background: theme.palette.background.dark,
        boxShadow: theme.shadows[2]
    },
    navLinkButtonRoot: {
        color: theme.palette.primary.contrastText
    }
});

const onLinkClick = (e, path) => {
    history.push(path)
};

const NavBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.navBarContainer}>
            <Button
                classes={{ root: classes.navLinkButtonRoot }}
                onClick={(e) => onLinkClick(e, viewRoutes.root)}
            >
                StreamPortal
            </Button>
            <Button
                classes={{ root: classes.navLinkButtonRoot }}
                onClick={(e) => onLinkClick(e, viewRoutes.about)}
            >
                About
            </Button>
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(NavBar);
