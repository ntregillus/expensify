import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import CreateExpensePage from '../components/CreateExpensePage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage} />
                <Route path="/create" component={CreateExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage}/> 
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;