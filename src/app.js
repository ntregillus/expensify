//import './utils.js' ;
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {firebase} from './firebase/firebase';

import {login, logout} from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

console.log('App.js is running.');


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=> {
    if(user){ //user provided if logged in
        store.dispatch(login(user.uid));
        console.log('logged in');
        store.dispatch(startSetExpenses()).then( () => {
            console.log('user ', user);
            renderApp();
            console.log(history.location);
            if(history.location.pathname === '/') {
                history.push('/dashboard');
                console.log('navigating to dashboard');
            }
        }).catch((e) => {
            console.log('what happened? ', e);
        });
    }else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
        console.log('logged out', history);
    }
});