import axios from '../../axios';
// import size from 'lodash/size';
import { Container } from 'unstated';


// const LIMIT_INCREASE = 25;

type StreamsState = {
    error: any,
    isLoading: boolean,
    isLoadingMore: boolean,
    streams: array,
};

export default class TopGamesContainer extends Container<StreamsState> {
    state = {
        error: null,
        isLoading: false,
        isLoadingMore: false,
        streams: [],
    };

    setError = error => {
        this.setState({ error: error.response.data });
    };

    fetchStreams = (gameName, limit = '') => {
        this.setState({ error: null });
        if (limit) {
            this.setState({ isLoadingMore: true });
        } else {
            this.setState({ isLoading: true });
        }

        axios.get(`streams/?game=${gameName}`)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ streams: response.data.data })
                }
                this.setState({ isLoading: false, isLoadingMore: false });
            })
            .catch((error) => {
                this.setError(error);
                this.setState({ isLoading: false, isLoadingMore: false });
            });
    };

    // fetchMoreStreams = () => this.fetchStreams(`limit=${size(this.state.topGames) + LIMIT_INCREASE}`);
}
                