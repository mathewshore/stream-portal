import axios from '../../axios';
import { Container } from 'unstated';


const RESULT_LIMIT = 12;

type TopGamesState = {
    error: any,
    isLoading: boolean,
    isLoadingMore: boolean,
    topGames: array,
};

export default class TopGamesContainer extends Container<TopGamesState> {
    state = {
        error: null,
        nextPageString: undefined,
        isLoading: false,
        isLoadingMore: false,
        topGames: []
    };

    setError = error => {
        console.log(error);
        this.setState({ error: 'Error' });
    };

    fetchTopGames = (moreString = '') => {
        this.setState({ error: null });

        if (moreString) {
            this.setState({ isLoadingMore: true });
        } else {
            this.setState({ isLoading: true });
        }

        const moreParameter = moreString ? `&${moreString}` : '';
        const resultLimitParameter = `first=${RESULT_LIMIT}`;
        axios.get(`games/top/?${resultLimitParameter}${moreParameter}`)
            .then((response) => {
                if (response.status === 200) {
                    const topGames = moreString
                        ? this.state.topGames.concat(response.data.data)
                        : response.data.data;
                    this.setState({
                        topGames,
                        nextPageString: response.data.pagination.cursor
                    });
                }
                this.setState({
                    isLoading: false,
                    isLoadingMore: false
                });
            })
            .catch((error) => {
                this.setError(error);
                this.setState({ isLoading: false, isLoadingMore: false });
            });
    };

    fetchMoreTopGames = () => {
        const moreString = `after=${this.state.nextPageString}`;
        this.fetchTopGames(moreString);
    };
}
