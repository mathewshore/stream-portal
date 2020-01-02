import React from 'react';
import pick from 'lodash/pick';

import { Provider, Subscribe } from 'unstated';
import { TopGamesContainer } from '../../storeContainers';
import ViewWrapper from '../ViewWrapper';
import TopGamesViewContent from './TopGamesViewContent';


const TopGamesView = () => (
    <Provider>
        <Subscribe to={[TopGamesContainer]}>
            {(topGamesStore) => {
                const { state } = topGamesStore;
                return (
                    <ViewWrapper {...pick(state, ['error', 'isLoading'])}>
                        <TopGamesViewContent
                            {...pick(state, [
                                'isLoading',
                                'isLoadingMore',
                                'topGames'
                            ])}
                            {...pick(topGamesStore, [
                                'fetchTopGames',
                                'fetchMoreTopGames'
                            ])}
                        />
                    </ViewWrapper>
                );
            }}
        </Subscribe>
    </Provider>
);

export default TopGamesView;
