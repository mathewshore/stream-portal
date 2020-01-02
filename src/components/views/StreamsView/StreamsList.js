import React from 'react';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '../../utils/Tooltip';


const styles = ({
    spacing,
    palette,
    shadows,
    border,
    oneLineTextEllipsis
}) => ({
    streamPreviewItem: {
        boxShadow: shadows[1],
        borderRadius: border.radius
    },
    previewImage: {
        width: '100%'
    },
    streamDetailsContainer: {
        display: 'flex',
        padding: `${spacing.unit * 0.5}px ${spacing.unit}px ${spacing.unit}px`
    },
    channelLogo: {
        maxHeight: spacing.unit * 6,
        borderRadius: 2
    },
    streamTextDetails: {
        marginLeft: spacing.unit,
        width: `calc(100% - ${spacing.unit + spacing.unit * 6}px)`
    },
    streamChannelStatus: {
        ...oneLineTextEllipsis,
        display: 'block'
    },
    streamUserDetails: {
        fontSize: 10,
        textAlign: 'right',
        color: palette.text.light
    }
});

const StreamsList = (props) => {
    const { classes } = props;
    return (
        <Grid container spacing={16}>
            {map(props.streams, stream => {
                return (
                    <Grid item xs={6} md={4} key={stream.id}>
                        <div className={classes.streamPreviewItem}>
                            <img
                                src={stream.thumbnail_url.replace('{width}x{height}', '400x200')}
                                alt={stream.display_name}
                                className={classes.previewImage}
                            />
                            <div className={classes.streamDetailsContainer}>
                                <div className={classes.streamTextDetails}>
                                    <Tooltip title={stream.title}>
                                        <div className={classes.streamChannelStatus}>
                                            {stream.title}
                                        </div>
                                    </Tooltip>
                                    <div>{stream.viewer_count} viewers</div>
                                    <div className={classes.streamUserDetails}>
                                        {stream.user_name}
                                    </div>
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