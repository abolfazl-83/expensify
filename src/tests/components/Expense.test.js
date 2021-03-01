import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {Expense} from '../../components/Expense';

let wrapper;

test('should render Expense correctly' , () => {
    wrapper = shallow(<Expense {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot();
});