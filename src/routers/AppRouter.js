import React from 'react';
import { Router, Route , Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import DashboardPage from '../pages/DashboardPage';
import NotfoundPage from '../pages/NotfoundPage';
import CreateExpensePage from '../pages/CreateExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
import LoginPage from '../pages/LoginPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history = {history}>
            <Switch>
                <PublicRoute path = '/' component = {LoginPage} exact = {true} />
                <PrivateRoute path = '/dashboard' component = {DashboardPage} />
                <PrivateRoute path = '/create' component = {CreateExpensePage} />
                <PrivateRoute path = '/edit/:expenseId' component = {EditExpensePage}/>
                <Route component = {NotfoundPage} />
            </Switch>
        </Router>
    );
};

export default AppRouter;