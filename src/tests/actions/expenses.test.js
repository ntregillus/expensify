import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

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
    const payload = {
        description: 'Rent',
        amount: 12323,
        createdAt: 1000,
        note: 'this was last months rent'
    }
    
    const actual = addExpense(payload);
    expect(actual).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            ... payload, 
            id: expect.any(String)
        }
    });
    
});

test('should setup default expense for addExpense', () => {
    const actual = addExpense();
    expect(actual).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});