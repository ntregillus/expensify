//import './utils.js' ;
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';


import {addExpense } from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

console.log('App.js is running.');


const store = configureStore();
store.dispatch(addExpense({description: 'Gas bill', amount:4500}));
store.dispatch(addExpense({description: 'Water bill',  createdAt:1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));

const {expenses, filters} = store.getState();

const filteredList = getVisibleExpenses(expenses, filters);
console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));