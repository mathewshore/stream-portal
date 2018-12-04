import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Loader from '../Loader';


const styles = theme => ({
    loadMoreContainer: {
        margin: `${theme.spacing.unit * 2}px 0`,
        display: 'flex',
        justifyContent: 'center'
    }
});

const LoadMore = (props) => {
    const { classes } = props;

    return (
        <div className={classes.loadMoreContainer}>
            {props.isLoadingMore ?
                <Loader /> :
                <Button
                    onClick={props.loadMore}
                    color="secondary"
                >
                    Show more
                </Button>
            }
        </div>
    );
};

LoadMore.propTypes = {
    isLoadingMore: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(LoadMore);
