import React from 'react';
import {shallow} from 'enzyme';
import {Login} from '../../components/Login';

let wrapper, startLogin;
beforeEach(() => {
    startLogin = jest.fn();

    wrapper = shallow(<Login startLogin = {startLogin} />)
});


test('should render the Login correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should run the correct prop after handleLogin' , () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalledTimes(1);
});