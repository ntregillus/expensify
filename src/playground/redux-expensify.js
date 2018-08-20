import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
    expenses: [{
        id: '1234',
        description: 'Januray Rent',
        note: 'last payment',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

//add expense
//remove expense
//edit expense
//set text filter
//sortby date
//sortbt amount
//set startdate
// set enddate
const expensesReducerDefaultState = [];

const addExpense = ({description='', note='', amount=0,createdAt=0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


//reducer for expensis section
const expensesReducer = (state=expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
        return [...state, action.expense];
        case 'REMOVE_EXPENSE':
        return state.filter((item)=> item.id != action.id);
        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id === action.id){
                return {
                    ...expense, 
                    ...action.updates
                };
            }
            else{
                return expense;
            }
        });
        default:
        return state;
    }
};


const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
const sortByAmount = () => ({
    type: 'SORT_BY',
    sortBy: 'amount'
});
const sortByDate = () => ({
    type: 'SORT_BY',
    sortBy: 'date'
});
const setStartDate = ({startDate} = {}) => ({
    type: 'SET_START_DATE',
    startDate
});
const setEndDate = ({endDate} = {}) => ({
    type: 'SET_END_DATE',
    endDate
});

const filtersDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state=filtersDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        };
        case 'SORT_BY':
        return {
            ...state,
            sortBy: action.sortBy
        }
        case 'SET_START_DATE':
        return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
        return {...state, endDate: action.endDate};
        default:
        return state;
    }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter((expense) =>  {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt < endDate;
      let textMatch = true;
      if(text && expense.description){
          textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      }
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expsneseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 100,
    createdAt: 1000
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 300,
    createdAt: -1000
}));



// store.dispatch(removeExpense({id: expsneseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
//store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
//store.dispatch(setStartDate({startDate: 125}));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate({endDate: 2}));
// store.dispatch(setEndDate());

const user = {
    name: 'nate',
    age: 35
};
console.log({
    ...user,
    location: 'durango',
    age: 36
});