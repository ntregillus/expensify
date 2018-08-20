import React from 'react';
import {createStore } from 'redux';
console.log('redux-101 starting');

const incrementCount = ({incBy = 1} = {}) => ({ 
    type:'INCREMENT',
    incBy
});

const decrementCount = ({decBy = 1} = {}) => ({
    type: 'DECREMEMENT',
    decBy
});

const resetCount = ({count = 0} = {}) => ({
    type:'RESET',
    count
});

const store = createStore((state = {count: 0}, action)=> {
    switch(action.type){
        case 'INCREMENT':
        return {
            count: state.count + action.incBy
        };
        case 'DECREMEMENT':
        return {
            count: state.count - action.decBy
        };
        case 'RESET':
        return { count: action.count};
    }

    return state;
});

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch(incrementCount({incBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decBy: 10}));


// unsubscribe(); turns off the subscription

store.dispatch(resetCount());

store.dispatch(resetCount({count:101}));




