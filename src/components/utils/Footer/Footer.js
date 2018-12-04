import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
    footerContainer: {
        borderTop: theme.border.main,
        padding: theme.spacing.unit,
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: theme.palette.background.dark,
        color: theme.palette.text.contrastText
    }
});

const Footer = (props) => {
    const { classes } = props;
    return (
        <div className={classes.footerContainer}>
            Powered by Twitch API
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(Footer);
