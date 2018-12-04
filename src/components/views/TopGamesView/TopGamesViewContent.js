import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import LoadMore from '../../utils/LoadMore';
import TopGamesList from './TopGamesList';


const styles = () => ({
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class TopGamesViewContent extends Component {
    componentDidMount = () => {
        this.props.fetchTopGames();
    };

    render() {
        return (
            <div>
                <TopGamesList topGames={this.props.topGames} />
                {!this.props.isLoading &&
                    <LoadMore
                        loadMore={this.props.fetchMoreTopGames}
                        isLoadingMore={this.props.isLoadingMore}
                    />
                }
            </div>
        );
    }
}

TopGamesViewContent.propTypes = {
    error: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.oneOf([null])
    ]),
    isLoading: PropTypes.bool.isRequired,
    isLoadingMore: PropTypes.bool.isRequired,
    fetchTopGames: PropTypes.func.isRequired,
    fetchMoreTopGames: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(TopGamesViewContent);
