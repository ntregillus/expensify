import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

import { wrap } from 'module';

test('should render ExpenseForm without data', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form with data', () =>{
    const expense = expenses[0];
    
    const wrapper = shallow(<ExpenseForm expense={expense} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm expense />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form')
        .simulate('submit', {preventDefault: () => {}});

    expect(wrapper.state('error').length).toBeGreaterThan(0);

    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () =>{
    const value = '123'
    const wrapper = shallow(<ExpenseForm  />);
    wrapper.find('input').at(0)
        .simulate('change', {target: {value: value}});
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textArea change', ()=> {
    const value = 'test\n this';
    const wrapper = shallow(<ExpenseForm  />);
    wrapper.find('textarea').at(0)
        .simulate('change', {target:{value}});
    expect(wrapper.state('note')).toBe(value);
});

test('should set valid amount on input change', () => {
    const value = '21.02';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1)
        .simulate('change', {target: {value}});
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should NOT set amount on invalid input change', () =>{
    const invalidValue = 'abc';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1)
        .simulate('change', {target: {invalidValue}});
    expect(wrapper.state('amount')).toBe(undefined);
    expect(wrapper).toMatchSnapshot();
});

test('should send vaild data to onSubmit', ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow((
        <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
    ));
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    let expected = {...expenses[0]};
    delete expected.id;
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expected);
});

test('should set newDate on date change', () => {
    const wrapper = shallow(<ExpenseForm  />);
    const onDateChange = wrapper.find('SingleDatePicker').prop('onDateChange')
    const expected = moment();
    onDateChange(expected);

    expect(wrapper.state('createdAt')).toBe(expected);
});


test('expect onfocus sets focused state', () => {
    const wrapper = shallow(<ExpenseForm />);

    const onFocusChange = wrapper.find('SingleDatePicker')
        .prop('onFocusChange');
    onFocusChange({focused: true});

    expect(wrapper.state('calFocused')).toBe(true);

});