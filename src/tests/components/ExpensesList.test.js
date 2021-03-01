import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesList} from '../../components/ExpensesList';
import expenses from '../fixtures/expenses';

let wrapper;

test('should render ExpensesList with 0 expenses', () => {
    wrapper = shallow(<ExpensesList expenses = {[]} />)
    expect(wrapper).toMatchSnapshot();
});
test('should render ExpensesList with 1 expense' , () => {
    wrapper = shallow(<ExpensesList expenses = {[expenses[0]]} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesList with multiple expenses' , () => {
    wrapper = shallow(<ExpensesList expenses = {expenses} />)
    expect(wrapper).toMatchSnapshot();
});