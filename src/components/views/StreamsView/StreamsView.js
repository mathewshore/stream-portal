import React from 'react';
import pick from 'lodash/pick';
import get from 'lodash/get';

import { Provider, Subscribe } from 'unstated';

import { StreamsContainer } from '../../storeContainers';
import ViewWrapper from '../ViewWrapper';
import StreamsViewContent from './StreamsViewContent';

import history from '../../../history';
import { viewRoutes } from '../../../urls';


const getGameName = () => {
    const pathname = get(history.location, 'pathname', '');
    return pathname.includes(viewRoutes.games)
        ? pathname.split(viewRoutes.games)[1]
        : '';
};

const TopGamesView = () => (
    <Provider>
        <Subscribe to={[StreamsContainer]}>
            {(streamsStore) => {
                const { state } = streamsStore;
                const gameName = getGameName();

                return (
                    <ViewWrapper
                        header={gameName}
                        {...pick(state, ['error', 'isLoading', 'isLoadingMore'])}
                    >
                        <StreamsViewContent
                            gameName={gameName}
                            streams={state.streams}
                            {...pick(streamsStore, ['fetchStreams'])}
                        />
                    </ViewWrapper>
                );
            }}
        </Subscribe>
    </Provider>
);

export default TopGamesView;
