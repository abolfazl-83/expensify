import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';

let wrapper , startLogout;
beforeEach(() => {
    startLogout = jest.fn();

    wrapper = shallow(<Header startLogout = {startLogout} />)
});

test('should render the Header correctly' , () => {
    expect(wrapper).toMatchSnapshot();
});

test('should run the correct prop after handleLogout', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalledTimes(1);
});