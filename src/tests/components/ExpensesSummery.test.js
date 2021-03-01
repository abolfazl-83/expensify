import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummery} from '../../components/ExpensesSummery';

let wrapper , expensesSummeryResult;

test('should render ExpensesSummery with 0 expenses' , () => {
    expensesSummeryResult = {
        expensesCount : 0,
        expensesTotal : 0
    };
    wrapper = shallow(<ExpensesSummery expensesSummeryResult = {expensesSummeryResult} />)
    expect(wrapper).toMatchSnapshot();
})
test('should render ExpensesSummery with 1 expense' , () => {
    expensesSummeryResult = {
        expensesCount : 1,
        expensesTotal : 0
    };
    wrapper = shallow(<ExpensesSummery expensesSummeryResult = {expensesSummeryResult} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummery with multiple expenses' , () => {
    expensesSummeryResult = {
        expensesCount : 2,
        expensesTotal : 321
    };
    wrapper = shallow(<ExpensesSummery expensesSummeryResult = {expensesSummeryResult} />)
    expect(wrapper).toMatchSnapshot();
});