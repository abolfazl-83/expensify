import React from 'react';
import {shallow} from 'enzyme';
import {CreateExpensePage} from '../../pages/CreateExpensePage';

test('should render CreateExpensePage correctly' , () => {
    let props = {
        history : {
            push : jest.fn()
        }
    }
    const wrapper = shallow(<CreateExpensePage {...props} />);
    expect(wrapper).toMatchSnapshot();
});