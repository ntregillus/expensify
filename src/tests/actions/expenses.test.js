import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import moment from 'moment';
const createMockStore = configureMockStore([thunk]);


test('should setup removeExpsene action Object', () => {

    const actual = removeExpense({id: '123abc'});
    expect(actual).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});



test('should editExpense generate action object', () => {
    const actual = editExpense('123abc', {description: 'test', amount: 10.34});
    expect(actual).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {description: 'test', amount: 10.34}
    });
});


test('should setup addExpense with provided values', () => {

    const actual = addExpense(expenses[0]);
    expect(actual).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });
    
});
//async test case below! use done as a fucntion to mark test complete
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 12345,
        note: 'this is a test',
        createdAt: 12345666
    };
    store.dispatch(startAddExpense(expenseData))
    .then(() => {
        const actual = store.getActions()[0];
        expect(actual).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        });
        return database.ref(`expenses/${actual.expense.id}`).once('value');   
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });

});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {};
    store.dispatch(startAddExpense(expenseData))
    .then(() => {
        const actual = store.getActions()[0];
        expect(actual).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                note: "",
                createdAt: 0,
                description: '',
                amount: 0
            }
        });
        return database.ref(`expenses/${actual.expense.id}`).once('value');   
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            note: '',
            createdAt: 0,
            description: '',
            amount: 0
        });
        done();
    }).catch((ex) => {
        console.log('failed promise', ex);
    });

});

// test('should setup default expense for addExpense', () => {
//     const actual = addExpense();
//     expect(actual).toEqual({
//         type: 'ADD_EXPENSE',
//         expense : {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     });
// });