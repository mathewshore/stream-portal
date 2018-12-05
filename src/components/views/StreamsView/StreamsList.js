import React from 'react';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '../../utils/Tooltip';


const styles = theme => ({
    streamPreviewItem: {
        boxShadow: theme.shadows[1],
        borderRadius: theme.border.radius
    },
    previewImage: {
        width: '100%'
    },
    streamDetailsContainer: {
        display: 'flex',
        padding: `${theme.spacing.unit * 0.5}px ${theme.spacing.unit}px ${theme.spacing.unit}px`
    },
    channelLogo: {
        maxHeight: theme.spacing.unit * 6,
        borderRadius: 2
    },
    streamTextDetails: {
        marginLeft: theme.spacing.unit,
        width: `calc(100% - ${theme.spacing.unit + theme.spacing.unit * 6}px)`
    },
    streamChannelStatus: {
        ...theme.oneLineTextEllipsis,
        display: 'block'
    },
    streamChannelName: {
        fontSize: 10,
        textAlign: 'right',
        color: theme.palette.text.light
    }
});

const StreamsList = (props) => {
    const { classes } = props;
    return (
        <Grid container spacing={16}>
            {map(props.streams, stream => {
                const { channel } = stream;
                return (
                    <Grid item xs={6} md={4} key={stream._id}>
                        <div className={classes.streamPreviewItem}>
                            <img
                                src={stream.preview.large}
                                alt={channel.display_name}
                                className={classes.previewImage}
                            />
                            <div className={classes.streamDetailsContainer}>
                                <div>
                                    <img
                                        src={channel.logo}
                                        alt={channel.display_name}
                                        className={classes.channelLogo}
                                    />
                                </div>
                                <div className={classes.streamTextDetails}>
                                    <Tooltip title={channel.status}>
                                        <div className={classes.streamChannelStatus}>{channel.status}</div>
                                    </Tooltip>
                                    <div>{stream.viewers} viewers</div>
                                    <div className={classes.streamChannelName}>{channel.display_name}</div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default withStyles(styles, { withTheme: true})(StreamsList);