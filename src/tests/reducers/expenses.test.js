import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import uuid from 'uuid';
import { setExpenses } from '../../actions/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };

    const actual = expensesReducer(expenses, action);
    expect(actual).toEqual([expenses[0], expenses[2]]);

});

test('should not remove expenses if id not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: 555
    };

    const actual = expensesReducer(expenses, action);
    expect(actual).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: 'test desc',
            note: 'test note',
            amount: 12334,
            createdAt: moment().valueOf()
        }
    };
    const addedExpense = {
        ...action.expense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, addedExpense]);

});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
       id: expenses[2].id,
        updates: {
            id: expenses[2].id,
            description: 'test desc2',
            note: 'test note2',
            amount: 12334,
            createdAt: moment().valueOf()
        }
    };
    const addedExpense = {
        ...action.expense,
    };
    const state = expensesReducer(expenses, action);
    expect(state[2]).toEqual(action.updates);
});

test('should not edit expense if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
       id: -1,
        updates: {
            id: -1,
            description: 'test desc2',
            note: 'test note2',
            amount: 12334,
            createdAt: moment().valueOf()
        }
    };
    const addedExpense = {
        ...action.expense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set the expenses state', () => {
    const state = expensesReducer([], setExpenses(expenses));
    expect(state).toEqual(expenses);
});