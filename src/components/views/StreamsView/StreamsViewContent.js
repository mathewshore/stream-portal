import React, { Component } from 'react';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';


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
        marginLeft: theme.spacing.unit
    }
});

class StreamsViewContent extends Component {
    componentDidMount = () => {
        const { gameName } = this.props;
        if (gameName) {
            this.props.fetchStreams(gameName);
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={16}>
                {map(this.props.streams, stream => (
                    <Grid item xs={6} md={3} key={stream._id}>
                        <div className={classes.streamPreviewItem}>
                            <img
                                src={stream.preview.medium}
                                alt={stream.channel.display_name}
                                className={classes.previewImage}
                            />
                            <div className={classes.streamDetailsContainer}>
                                <div>
                                    <img
                                        src={stream.channel.logo}
                                        alt={stream.channel.display_name}
                                        className={classes.channelLogo}
                                    />
                                </div>
                                <div className={classes.streamTextDetails}>
                                    <div>{stream.channel.status}</div>
                                    <div>{stream.viewers} viewers</div>
                                    <div>{stream.channel.display_name}</div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(StreamsViewContent);
