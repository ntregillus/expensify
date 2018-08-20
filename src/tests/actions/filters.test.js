import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';


test('should generate set start date action object', () => {
    const actual = setStartDate({startDate: moment(0)});

    expect(actual).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});


test('should generate set end date action object', () => {
    const actual = setEndDate({endDate: moment(0)});

    expect(actual).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate action SET_TEXT_FILTER with given text', () => {
    const actual = setTextFilter('test');
    expect(actual).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    });
});

test('should generate default SET_TEXT_FILTER action object', () => {
    const actual = setTextFilter();
    expect(actual).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate action for setStartDate', () => {
    const actual = setStartDate({startDate: 1});
    expect(actual).toEqual({
        type: 'SET_START_DATE',
        startDate: 1
    });
});

test('should generate action for setEndDate', () => {
    const actual = setEndDate({endDate: 1});
    expect(actual).toEqual({
        type: 'SET_END_DATE',
        endDate: 1
    });
});