import React from 'react';
import {shallow} from 'enzyme';
import {Notfound} from '../../components/Notfound';

let wrapper, history;
beforeEach(() => {
    history = {
        push : jest.fn()
    }
    wrapper = shallow(<Notfound history = {history} />);
})

test('should match the snapShot' , () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call the prop after button click' , () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/')
})