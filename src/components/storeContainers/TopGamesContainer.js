import axios from '../../axios';
import size from 'lodash/size';
import { Container } from 'unstated';


const LIMIT_INCREASE = 12;

type TopGamesState = {
    error: any,
    isLoading: boolean,
    isLoadingMore: boolean,
    topGames: array,
};

export default class TopGamesContainer extends Container<TopGamesState> {
    state = {
        error: null,
        isLoading: false,
        isLoadingMore: false,
        topGames: [],
    };

    setError = error => this.setState({ error: error.response.data });

    fetchTopGames = (limit = '') => {
        this.setState({ error: null });
        if (limit) {
            this.setState({ isLoadingMore: true });
        } else {
            this.setState({ isLoading: true });
        }

        const stringQueryParameters = limit ? `/?${limit}` : '';
        axios.get(`games/top${stringQueryParameters}`)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ topGames: response.data.top });
                }
                this.setState({ isLoading: false, isLoadingMore: false });
            })
            .catch((error) => {
                this.setError(error);
                this.setState({ isLoading: false, isLoadingMore: false });
            });
    };

    fetchMoreTopGames = () => this.fetchTopGames(`limit=${size(this.state.topGames) + LIMIT_INCREASE}`);
}
