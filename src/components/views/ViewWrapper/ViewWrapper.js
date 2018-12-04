import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import Container from '../../utils/Container';
import Loader from '../../utils/Loader';


const styles = theme => ({
    viewWrapper: {
        minHeight: `calc(100vh - ${theme.spacing.unit * 10}px - ${theme.spacing.unit * 15}px - ${theme.spacing.unit * 6}px)`,
        padding: `${theme.spacing.unit * 10}px 0 ${theme.spacing.unit * 15}px`,
        position: 'relative'
    },
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
});

const ViewWrapper = (props) => {
    const { classes, error } = props;
    return (
        <div className={classes.viewWrapper}>
            <Container>
                <div>
                    {props.header && <Typography variant="h3">{props.header}</Typography>}
                    {props.isLoading &&
                        <div className={props.classes.loaderContainer}>
                            <Loader />
                        </div>
                    }
                    {error && !props.isLoading &&
                        <div>
                            <div>{error.status}</div>
                            <div>{error.error}</div>
                        </div>
                    }
                    {props.children}
                </div>
            </Container>
        </div>
    );
};

ViewWrapper.propTypes = {
    header: PropTypes.string,
    children: PropTypes.node
};

export default withStyles(styles, { withTheme: true })(ViewWrapper);
