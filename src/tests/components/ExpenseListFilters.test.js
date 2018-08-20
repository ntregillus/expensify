import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilter, ExpenseListFilters} from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, setEndDate, setStartDate, 
sortByAmount, sortByDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter= {setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
         />);
});

test('should render ExpenseListFilters renders', ()=> {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilters',() => {
    wrapper.setProps({filters:altFilters});
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    wrapper.find('input').at(0).simulate('change', {
        target: {value: 'inputTests'}
    });
    expect(setTextFilter).toBeCalledWith('inputTests');
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: {value: 'date'}
    });
    expect(sortByDate).toBeCalled();
});
test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {value: 'amount'}
    });
    expect(sortByAmount).toBeCalled();
});
test('should handle date changes', () => {
    const expectStartDate = moment(0);
    const expectEndDate = moment(0).add(5, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: expectStartDate, 
        endDate:expectEndDate
    });
    expect(setStartDate).toBeCalledWith({startDate: expectStartDate});
    expect(setEndDate).toBeCalledWith({endDate: expectEndDate});
});
test('should handle date focus changes', () => {
    //spoofing focus change
    wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
    expect(wrapper.state('calFocused')).toEqual('startDate');
    wrapper.find('DateRangePicker').prop('onFocusChange')(null);
    expect(wrapper.state('calFocused')).toBe(null);
});