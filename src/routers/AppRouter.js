import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'; 
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import CreateExpensePage from '../components/CreateExpensePage';
import Login from '../components/Login';

import PrivateRoute from './PrivateRoute';
import AnonymousRoute from './AnonymousRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <AnonymousRoute path="/" exact={true} component={Login} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={CreateExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/> 
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;