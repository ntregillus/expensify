import React from 'react';
import {shallow} from 'enzyme';
import {Login} from '../../components/Login';

test('should match login render to snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin when clicking login button', () => {
    const loginSpy = jest.fn();
    const wrapper = shallow(<Login startLogin={loginSpy} />);
    wrapper.find('button').prop('onClick')();
    expect(loginSpy).toBeCalled();
});