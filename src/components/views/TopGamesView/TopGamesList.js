import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import { viewRoutes } from '../../../urls';


const styles = theme => ({
    gameItemLink: {
        textDecoration: 'none',
        color: theme.palette.text.main
    },
    gameItemPaper: {
        position: 'relative',
        height: '100%',
        boxShadow: theme.shadows[4]
    },
    gameImage: {
        width: '100%'
    },
    gameItemName: {
        fontSize: 14
    },
    gameItemDetails: {
        padding: theme.spacing.unit * 0.5
    },
    gameItemViewerCount: {
        fontSize: 12
    }
});

const TopGamesList = (props) => {
    const { classes } = props;

    return (
        <Grid container spacing={16}>
            {map(props.topGames, ({ game, viewers }) => {
                // const imageUrl = game.box.template.replace('{width}x{height}', '285x380');
                return (
                    <Grid item xs={6} md={2} key={game._id}>
                        <Link to={`${viewRoutes.games}${game.name}`} className={classes.gameItemLink}>
                            <div className={classes.gameItemPaper}>
                                <img className={classes.gameImage} src={game.box.large} alt={game.name} />
                                <div className={classes.gameItemDetails}>
                                    <div className={classes.gameItemName}>{game.name}</div>
                                    <div className={classes.gameItemViewerCount}>{viewers} viewers</div>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                );
            })}
        </Grid>
    );
};

TopGamesList.propTypes = {
    classes: PropTypes.object.isRequired,
    topGames: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(TopGamesList);
