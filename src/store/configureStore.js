import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

/// setting up fail over logic if we do not have the redux dev
/// tools installed! if the redux tools are not installed, 
/// compose is used
const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
|| compose;


export default () => {
    //store creation
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
