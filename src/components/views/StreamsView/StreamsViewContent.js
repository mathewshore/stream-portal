import React, { Component } from 'react';
import StreamsList from './StreamsList';


class StreamsViewContent extends Component {
    componentDidMount = () => {
        const { gameName } = this.props;
        if (gameName) {
            this.props.fetchStreams(gameName);
        }
    };

    render() {
        return <StreamsList streams={this.props.streams}/>;
    }
}

export default StreamsViewContent;
