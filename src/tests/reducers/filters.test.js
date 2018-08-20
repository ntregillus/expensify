import filtersReducer from '../../reducers/filters';
import moment from 'moment';


test('should setup defualt filter values', () =>{
    const state = filtersReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('Month'),
        endDate: moment().endOf("Month")
    })
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY', sortBy: 'amount'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by date', () => {
    const state = filtersReducer({sortBy: 'amount'}, {type: 'SORT_BY', sortBy: 'date'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () =>{
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text:'test'
    });
    expect(state.text).toBe('test');
});
test('should set startDate filter', () =>{
    const expected = moment(0).add(123, 'days');
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate: expected
    });
    expect(state.startDate).toBe(expected);
});
test('should set endDate filter', () =>{

    const expected = moment(0).add(123, 'days');
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate: expected
    });
    expect(state.endDate).toBe(expected);

});