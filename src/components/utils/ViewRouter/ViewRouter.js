import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';

import TopGamesView from '../../views/TopGamesView';
import StreamsView from '../../views/StreamsView';
import AboutView from '../../views/AboutView';

import { viewRoutes } from '../../../urls';
import history from '../../../history';


const ViewRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact path={viewRoutes.root} component={TopGamesView} />
            <Route path={viewRoutes.games} component={StreamsView} />
            <Route path={viewRoutes.about} component={AboutView} />
            <Redirect to={viewRoutes.root} />
        </Switch>
    </Router>
);

export default ViewRouter;
