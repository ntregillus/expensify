import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';


test('should render Header correctly', () => {

        // const renderer = new ReactShallowRenderer();
        // renderer.render(<Header />);
        
        // expect(renderer.getRenderOutput()).toMatchSnapshot();
        // //console.log(renderer.getRenderOutput());

        const wrapper = shallow(<Header logout={() => {}} />);
        expect(wrapper).toMatchSnapshot();

        //expect(wrapper.find('h1').text()).toBe("Expensify");

});

test('should logout be clicked, startLogout action should be created', () => {
        const logoutSpy = jest.fn();
        const wrapper = new shallow(<Header logout={logoutSpy} />);
        wrapper.find('button').prop('onClick')();
        expect(logoutSpy).toBeCalled();
});