import React from 'react';
import {shallow} from 'enzyme';
import {CreateExpensePage} from '../../components/CreateExpensePage';
import expenses from '../fixtures/expenses';


let onSubmitSpy, history, wrapper;
beforeEach(() => {
    onSubmitSpy = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        <CreateExpensePage addExpense={onSubmitSpy} history={history}
    />);
});

test('should render CreateExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
});