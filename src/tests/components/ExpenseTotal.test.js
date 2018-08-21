import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpensesTotal} from '../../components/ExpensesTotal';
let wrapper
beforeEach(() =>{
    wrapper = shallow(<ExpensesTotal />);
});

test('should render 0 totaling $0.00', () =>{

    wrapper.setProps({expensesCount: 0, ExpensesTotal: 0});
    expect(wrapper).toMatchSnapshot();

});

test('should render 1 totaling $1.00', () => {
    wrapper.setProps({expensesCount: 1, ExpensesTotal: 100});
    expect(wrapper).toMatchSnapshot();

});
