import React from 'react';
import {shallow} from 'enzyme';
import {EditExpense} from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let wrapper,startEditExpense, startRemoveExpense, history, expense;
beforeEach(() => {
    expense = expenses[2];
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {
        push : jest.fn()
    };
    wrapper = shallow(<EditExpense 
         startEditExpense = {startEditExpense}
         startRemoveExpense = {startRemoveExpense}
         history = {history}
         expense = {expense}
        />)
});

test('should render EditExpense correctly' , () => {
    expect(wrapper).toMatchSnapshot();
});

test('should run the correct props after handleOnSubmit' , () => {
    wrapper.find('ExpenseForm').prop('onSubmit')({ description : 'akbar'});
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id , {description : 'akbar'});
    expect(history.push).toHaveBeenLastCalledWith('/')
});

test('should run the correct props after handleOnRemove' , () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expense.id);
    expect(history.push).toHaveBeenLastCalledWith('/')
});