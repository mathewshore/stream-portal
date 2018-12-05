import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import withStyles from '@material-ui/core/styles/withStyles';
import MuiTooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';


const styles = theme => ({
    popper: {
        opacity: 1
    },
    tooltipBottom: {
        marginTop: 0,
        background: theme.palette.background.main
    }
});

const Tooltip = props => {
    const { classes } = props;
    return (
        <MuiTooltip
            {...omit(props, ['classes', 'children'])}
            classes={{
                popper: classes.popper,
                tooltipPlacementBottom: classes.tooltipBottom
            }}
        >
            {props.children}
        </MuiTooltip>
    );
};

Tooltip.defaultProps = {
    placement: 'bottom',
    TransitionComponent: Zoom
};

Tooltip.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
};

export default withStyles(styles, { withTheme: true })(Tooltip);
