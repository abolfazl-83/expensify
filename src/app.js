import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, {history} from './routers/AppRouter';
import {login , logout} from './actions/auth';
import {auth} from './firebase/firebase';
import {startSetExpenses} from './actions/expenses';
import normalize from 'normalize.css';
import './styles/styles.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
const jsx = (
    <Provider store = {store}>
         <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx , document.getElementById('app'))
        hasRendered = true;
    }
};
ReactDOM.render(<p>loading...</p> , document.getElementById('app'))
auth.onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/dashboard')
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
    };
});