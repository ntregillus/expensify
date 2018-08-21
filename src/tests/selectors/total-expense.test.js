import getExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if not expenses', () => {
    const actual = getExpensesTotal([]);
    expect(actual).toBe(0);
});

test('should corectly add up a single expense', () =>{
    const expenses = [{amount: 12345}]
    const actual = getExpensesTotal(expenses);
    expect(actual).toBe(12345);
});

test('should correctly add up multiple expenses', () =>{
    const expenses = [{amount: 2}, {amount: 3 }]
    const actual = getExpensesTotal(expenses);
    expect(actual).toBe(5);
});