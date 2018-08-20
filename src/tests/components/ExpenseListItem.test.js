import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListItem} from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem id='123abc' description='test' createdAt={1000} amount={12301}  />);

    expect(wrapper).toMatchSnapshot();
});