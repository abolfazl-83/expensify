import React from 'react';
import {shallow} from 'enzyme';
import {NotfoundPage} from '../../pages/NotfoundPage';

test('should render NotfoundPage correctly' , () => {
    let props = {
        history : {
            push : jest.fn()
        }
    }
    const wrapper = shallow(<NotfoundPage {...props} />)
    expect(wrapper).toMatchSnapshot();
});