import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../pages/EditExpensePage';


test('should render EditExpensePage correctly', () => {
    let props = {
        history : {
            push : jest.fn()
        }
    }

    const wrapper = shallow(<EditExpensePage {...props} />)
    expect(wrapper).toMatchSnapshot();
});