import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, match, 
    editExpenseSpy, removeExpenseSpy;
beforeEach(() => {
    history = {push: jest.fn()};
    match = {params: {id:'abc'}};
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    wrapper = shallow(<EditExpensePage 
        match={match} 
        history={history}
        expense={expenses[2]} 
        editExpense={editExpenseSpy} 
        removeExpense={removeExpenseSpy}/>)
});


test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(
        match.params.id,
        expenses[2]
    );
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpenseSpy).toHaveBeenCalled();
    expect(history.push).toHaveBeenLastCalledWith('/');
});